/*

    DATA INTERFACES

 */
import {IToDo} from "./todo";
import {IAlbums} from "./albums";
import {IPosts} from "./posts";
import {IComments} from "./comments";

export interface IGeo {
    lat: string,
    lng: string
}

export interface IAddress {
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    geo: IGeo
}

export interface ICompany {
    name: string,
    catchPhrase: string,
    bs: string
}

export interface IUser {
    id: number,
    name: string,
    username: string,
    email: string,
    address: IAddress,
    phone: string,
    website: string,
    company: ICompany
}


/*

    REDUX INTERFACES (USERS)

 */
export interface UserState {
    users: IUser[],
    loading: boolean,
    error: null | string
}

export enum UserActionsTypes {
    FETCH_USERS = "FETCH_USERS",
    FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS",
    FETCH_USERS_ERROR = "FETCH_USERS_ERROR"
}

interface FetchUsersAction {
    type: UserActionsTypes.FETCH_USERS,
}

interface FetchUsersSuccessAction {
    type: UserActionsTypes.FETCH_USERS_SUCCESS,
    payload: IUser[]
}

interface FetchUsersErrorAction {
    type: UserActionsTypes.FETCH_USERS_ERROR,
    payload: string
}

export type UserAction = FetchUsersAction | FetchUsersSuccessAction | FetchUsersErrorAction


/*

    REDUX INTERFACES (PROFILE)

 */
export interface ProfileState {
    user: IUser,
    todos: IToDo[] | null,
    albums: IAlbums[] | null,
    posts: IPosts[] | null,
    postComments: IComments[] | null,
    loading: boolean,
    error: null | string,
    isLocal: boolean
}

export enum ProfileActionsTypes {
    FETCH_PROFILE = "FETCH_PROFILE",
    FETCH_PROFILE_SUCCESS = "FETCH_PROFILE_SUCCESS",
    FETCH_PROFILE_ERROR = "FETCH_PROFILE_ERROR",

    FETCH_PROFILE_TODO_SUCCESS = "FETCH_PROFILE_TODO_SUCCESS",
    FETCH_PROFILE_TODO_ERROR = "FETCH_PROFILE_TODO_ERROR",

    FETCH_PROFILE_POSTS_SUCCESS = "FETCH_PROFILE_POSTS_SUCCESS",
    FETCH_PROFILE_POSTS_ERROR = "FETCH_PROFILE_POSTS_ERROR",

    FETCH_PROFILE_COMMENTS_SUCCESS = "FETCH_PROFILE_COMMENTS_SUCCESS",
    FETCH_PROFILE_COMMENTS_ERROR = "FETCH_PROFILE_COMMENTS_ERROR",

    FETCH_PROFILE_ALBUMS_SUCCESS = "FETCH_PROFILE_ALBUMS_SUCCESS",
    FETCH_PROFILE_ALBUMS_ERROR = "FETCH_PROFILE_ALBUMS_ERROR",

    SET_IS_LOCAL = "SET_IS_LOCAL"

}

interface FetchProfileAction {
    type: ProfileActionsTypes.FETCH_PROFILE,
}

interface FetchProfileSuccessAction {
    type: ProfileActionsTypes.FETCH_PROFILE_SUCCESS,
    payload: IUser
}

interface FetchProfileErrorAction {
    type: ProfileActionsTypes.FETCH_PROFILE_ERROR,
    payload: string
}


interface FetchProfilePostsSuccessAction {
    type: ProfileActionsTypes.FETCH_PROFILE_POSTS_SUCCESS,
    payload: IPosts[] | null
}

interface FetchProfilePostsErrorAction {
    type: ProfileActionsTypes.FETCH_PROFILE_POSTS_ERROR,
    payload: string
}


interface FetchProfileAlbumsSuccessAction {
    type: ProfileActionsTypes.FETCH_PROFILE_ALBUMS_SUCCESS,
    payload: IAlbums[] | null
}

interface FetchProfileAlbumsErrorAction {
    type: ProfileActionsTypes.FETCH_PROFILE_ALBUMS_ERROR,
    payload: string
}


interface FetchProfileCommentsSuccessAction {
    type: ProfileActionsTypes.FETCH_PROFILE_COMMENTS_SUCCESS,
    payload: IComments[] | null
}

interface FetchProfileCommentsErrorAction {
    type: ProfileActionsTypes.FETCH_PROFILE_COMMENTS_ERROR,
    payload: string
}

interface FetchProfileToDoSuccessAction {
    type: ProfileActionsTypes.FETCH_PROFILE_TODO_SUCCESS,
    payload: IToDo[] | null
}

interface FetchProfileToDoErrorAction {
    type: ProfileActionsTypes.FETCH_PROFILE_TODO_ERROR,
    payload: string
}

interface SetIsLocalAction {
    type: ProfileActionsTypes.SET_IS_LOCAL,
    payload: boolean
}

export type ProfileAction =
    FetchProfileAction
    | FetchProfileSuccessAction
    | FetchProfileErrorAction
    | FetchProfileAlbumsSuccessAction
    | FetchProfileAlbumsErrorAction
    | FetchProfilePostsSuccessAction
    | FetchProfilePostsErrorAction
    | FetchProfileCommentsSuccessAction
    | FetchProfileCommentsErrorAction
    | FetchProfileToDoSuccessAction
    | FetchProfileToDoErrorAction
    | SetIsLocalAction
