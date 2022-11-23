import {FC, useEffect} from "react";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useParams} from "react-router-dom";
import {useActions} from "../../hooks/useActions";
import ProfileInfo from "./ProfileInfo";
import ToDoProfile from "./ToDoProfile";
import AlbumsProfile from "./AlbumsProfile";
import PostsProfile from "./Posts/PostsProfile";
// @ts-ignore
import styles from "./Profile.module.css"
const ProfilePage: FC = () => {

    const {user, loading, error, posts, postComments, todos, albums, isLocal} = useTypedSelector(state => state.profile)
    const {userID} = useParams();
    const {fetchProfile, fetchAlbumsProfile, fetchPostsProfile, fetchToDoProfile} = useActions()

    useEffect(() => {
        fetchProfile(Number(userID))
        fetchAlbumsProfile(Number(userID))
        fetchToDoProfile(Number(userID))
        fetchPostsProfile(Number(userID))
    }, [userID])


    if (loading) {
        return (
            <div>Loading...</div>
        )
    }

    if (error) {
        return (
            <div>Failed to load profile!</div>
        )
    }

    return (
        <>
            <ProfileInfo user={user}/>
            <div className={styles.extra_block}>
                <ToDoProfile todos={todos}/>
                <AlbumsProfile albums={albums}/>

            </div>
            <PostsProfile posts={posts} postComments={postComments}/>
            {isLocal ? <h4>*Local Version*</h4> : null}
        </>

    )
}
export default ProfilePage;