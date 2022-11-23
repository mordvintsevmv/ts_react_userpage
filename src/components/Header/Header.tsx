import {FC} from "react";
import { NavLink } from "react-router-dom";
// @ts-ignore
import logoMonkey from "../../img/logoMonkey.ico"
// @ts-ignore
import styles from "./Header.module.css"

const Header: FC = () => {
    return(
        <div className={styles.header}>
            <NavLink to={"/"}><img src={logoMonkey} alt='monkey'/></NavLink>
            <h1>User API Test Page</h1>
        </div>
    )
}

export default Header
