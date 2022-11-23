import {FC} from "react";
import {IPosts} from "../../../types/posts";
import {IComments} from "../../../types/comments";
import PostItem from "./PostItem";

interface PostsProfileProps {
    posts: IPosts[] | null,
    postComments: IComments[] | null
}
const PostsProfile: FC<PostsProfileProps> = ({posts, postComments}) => {
    return (
        <div>
            <h3>
                Posts
            </h3>

            {posts?.map(post =>
            <PostItem key={post.id} post={post} postComments={postComments}/>
            )}
        </div>
    )
}

export default PostsProfile