import React, {FC, useEffect} from "react";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useActions} from "../../hooks/useActions";

const UserList: FC = () => {
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
            {users.map(user =>
                <div key={user.id}>
                    {user.id}. {user.name} lives in {user.address.city}
                </div>
            )
            }
        </div>
    )
}

export default UserList