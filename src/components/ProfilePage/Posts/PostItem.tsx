import {FC} from "react";
import {IPosts} from "../../../types/posts";
import {IComments} from "../../../types/comments";
// @ts-ignore
import styles from "./Posts.module.css"
// @ts-ignore
import avatar from "../../../img/avatar.png"
// @ts-ignore
import email from '../../../img/email.png'

interface PostItemProps {
    post: IPosts,
    postComments: IComments[] | null
}

const PostItem: FC<PostItemProps> = ({post, postComments}) => {
    return (
        <div className={styles.post_wrapper}>

            <img src={avatar} alt={"Avatar"} className={styles.avatar}/>

            <div className={styles.title}>
                {post.title}
            </div>

            <div className={styles.body}>
                {post.body}
            </div>

            <h5>Comments</h5>

            <div className={styles.comments_wrapper}>

                {postComments?.map(comment =>
                    <div key={comment.id} className={styles.comment_item}>
                        <div className={styles.comment_email}>
                            <img src={email} alt={"email"}/>
                            <span>{comment.email}</span>
                        </div>

                        <div className={styles.comment_body}>
                            {comment.body}
                        </div>
                    </div>
                )}

            </div>


        </div>
    )
}

export default PostItem