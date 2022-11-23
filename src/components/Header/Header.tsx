import {FC} from "react";
// @ts-ignore
import logoMonkey from "../../img/logoMonkey.ico"
// @ts-ignore
import styles from "./Header.module.css"

const Header: FC = () => {
    return(
        <div className={styles.header}>
            <img src={logoMonkey} alt='monkey'/>
            <h1>User API Test Page</h1>
        </div>
    )
}

export default Header
