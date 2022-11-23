import React, {FC, useEffect} from "react";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useActions} from "../../hooks/useActions";
import {NavLink} from "react-router-dom";
// @ts-ignore
import styles from "./Navbar.module.css"

const Navbar: FC = () => {
    const {users, loading, error} = useTypedSelector(state => state.users)
    const {fetchUsers} = useActions()

    useEffect(() => {
        fetchUsers();
    }, [])

    if (loading) {
        return (
            <div>
                Loading...
            </div>)
    }

    if (error) {
        return (
            <div>
                {error}
            </div>)
    }

    return (
        <div>
            <div>
                <h4>Users</h4>
            </div>

            <div>
                {users.map(user =>
                    <div key={user.id} className={styles.item_block}>
                        <NavLink to={`/user/${user.id}`}
                                 className={navData => navData.isActive ? styles.active : styles.item}>{user.name}</NavLink>
                    </div>
                )}
            </div>
        </div>
    )
}


export default Navbar