import {FC} from "react";
import {IUser} from "../../types/users";
// @ts-ignore
import styles from "./Profile.module.css"
// @ts-ignore
import avatar from '../../img/avatar.png'
// @ts-ignore
import back from '../../img/forest.jpg'
// @ts-ignore
import work from '../../img/work.png'
// @ts-ignore
import address from '../../img/location.png'
// @ts-ignore
import email from '../../img/email.png'
// @ts-ignore
import phone from '../../img/phone.png'
// @ts-ignore
import web from '../../img/web.png'

interface ProfileInfoProps {
    user: IUser
}

const ProfileInfo: FC<ProfileInfoProps> = ({user}) => {
    return (
        <div className={styles.info_wrapper}>

            <div className={styles.back}>
                <img src={back} alt={"back"}/>
            </div>

            <div className={styles.info_block}>

                <img src={avatar} alt={"Avatar"} className={styles.avatar}/>

                <div className={styles.main_info}>
                    <span className={styles.name}>{user.name}</span>


                    <div className={styles.contacts}>

                        <span className={styles.email}>
                            <img src={email} alt="email"/>
                            <span>{user.email}</span>
                        </span>

                        <span className={styles.phone}>
                            <img src={phone} alt="phone"/>
                            <span>{user.phone}</span>
                        </span>

                        <span className={styles.web}>
                            <img src={web} alt="web"/>
                            <span>{user.website}</span>
                        </span>


                    </div>

                </div>

                <div className={styles.address}>
                    <img src={address} alt="location"/>
                    <span>{user.address.city}, {user.address.street}</span>
                </div>

                <div className={styles.work}>
                    <img src={work} alt="work"/>
                    <span>{user.company.name}</span>
                </div>


            </div>
        </div>
    )
}

export default ProfileInfo