import {Dispatch} from "redux";
import {IUser, ProfileAction, ProfileActionsTypes} from "../../types/users";
import axios from "axios";
import {usersReserve} from "../../data/users";
import {todoReserve} from "../../data/todo";
import {postsReserve} from "../../data/posts";
import {albumsReserve} from "../../data/albums";
import {commentsReserve} from "../../data/comments";
import {IToDo} from "../../types/todo";
import {IPosts} from "../../types/posts";
import {IAlbums} from "../../types/albums";
import {IComments} from "../../types/comments";

export const fetchProfile = (id: number): any => {
    return async (dispatch: Dispatch<ProfileAction>) => {
        try {
            dispatch({type: ProfileActionsTypes.FETCH_PROFILE})
            const response = await axios.get<IUser>(`https://jsonplaceholder.typicode.com/users/${id}`)
            dispatch({type: ProfileActionsTypes.FETCH_PROFILE_SUCCESS, payload: response.data})
            dispatch({type: ProfileActionsTypes.SET_IS_LOCAL, payload: false})

        } catch (e) {
            dispatch({
                type: ProfileActionsTypes.FETCH_PROFILE_ERROR,
                payload: "Error while loading profile from web. Loading local profile."
            })
            console.warn("Loading local profile")
            const index = usersReserve.findIndex(user => user.id === id)
            dispatch({type: ProfileActionsTypes.FETCH_PROFILE_SUCCESS, payload: usersReserve[index]})
            dispatch({type: ProfileActionsTypes.SET_IS_LOCAL, payload: true})

        }
    }
}

export const fetchToDoProfile = (id: number): any => {

    return async (dispatch: Dispatch<ProfileAction>) => {
        try {
            const response = await axios.get<IToDo[]>(`https://jsonplaceholder.typicode.com/todos`, {params: {userId: id}})
            dispatch({type: ProfileActionsTypes.FETCH_PROFILE_TODO_SUCCESS, payload: response.data})
        } catch (e) {
            dispatch({
                type: ProfileActionsTypes.FETCH_PROFILE_TODO_ERROR,
                payload: "Error while loading todos from web. Loading local todos."
            })
            console.warn("Loading local todos")

            const todos = todoReserve.filter(todo => todo.userId === id)

            dispatch({type: ProfileActionsTypes.FETCH_PROFILE_TODO_SUCCESS, payload: todos})
        }
    }
}

export const fetchPostsProfile = (id: number): any => {

    return async (dispatch: Dispatch<ProfileAction>) => {
        try {
            const response = await axios.get<IPosts[]>(`https://jsonplaceholder.typicode.com/posts`, {params: {userId: id}})
            dispatch({type: ProfileActionsTypes.FETCH_PROFILE_POSTS_SUCCESS, payload: response.data})

            response.data.forEach(post => dispatch(fetchPostCommentsProfile(post.id)))
        } catch (e) {
            dispatch({
                type: ProfileActionsTypes.FETCH_PROFILE_POSTS_ERROR,
                payload: "Error while loading posts from web. Loading local posts."
            })
            console.warn("Loading local posts")
            const posts = postsReserve.filter(post => post.userId === id)
            dispatch({type: ProfileActionsTypes.FETCH_PROFILE_POSTS_SUCCESS, payload: posts})
            posts.forEach(post => dispatch(fetchPostCommentsProfile(post.id)))
        }
    }
}

export const fetchAlbumsProfile = (id: number): any => {

    return async (dispatch: Dispatch<ProfileAction>) => {
        try {
            const response = await axios.get<IAlbums[]>(`https://jsonplaceholder.typicode.com/albums`, {params: {userId: id}})
            dispatch({type: ProfileActionsTypes.FETCH_PROFILE_ALBUMS_SUCCESS, payload: response.data})
        } catch (e) {
            dispatch({
                type: ProfileActionsTypes.FETCH_PROFILE_ALBUMS_ERROR,
                payload: "Error while loading albums from web. Loading local albums."
            })
            console.warn("Loading local albums")
            const albums = albumsReserve.filter(album => album.userId === id)
            dispatch({type: ProfileActionsTypes.FETCH_PROFILE_ALBUMS_SUCCESS, payload: albums})
        }
    }
}

export const fetchPostCommentsProfile = (id: number): any => {
    return async (dispatch: Dispatch<ProfileAction>) => {
        try {
            const response = await axios.get<IComments[]>(`https://jsonplaceholder.typicode.com/comments`, {params: {postId: id}})
            dispatch({type: ProfileActionsTypes.FETCH_PROFILE_COMMENTS_SUCCESS, payload: response.data})
        } catch (e) {
            dispatch({
                type: ProfileActionsTypes.FETCH_PROFILE_COMMENTS_ERROR,
                payload: "Error while loading comments from web. Loading local comments."
            })
            console.warn("Loading local comments")
            const comments = commentsReserve.filter(comment => comment.postId === id)
            dispatch({type: ProfileActionsTypes.FETCH_PROFILE_COMMENTS_SUCCESS, payload: comments})
        }
    }
}