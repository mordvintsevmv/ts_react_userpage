import {Dispatch} from "redux";
import {IUser, UserAction, UserActionsTypes} from "../../types/users";
import axios from "axios";
import {usersReserve} from "../../data/users";

export const fetchUsers = (): any => {
    return async (dispatch: Dispatch<UserAction>) => {
        try{
            dispatch({type: UserActionsTypes.FETCH_USERS})
            const response = await axios.get<IUser[]>("https://jsonplaceholder.typicode.com/users")
            dispatch({type: UserActionsTypes.FETCH_USERS_SUCCESS, payload: response.data})
        }catch (e) {
            dispatch({type: UserActionsTypes.FETCH_USERS_ERROR, payload: "Error while loading users from web. Loading local users."})
            console.warn("Loading local users")
            dispatch({type: UserActionsTypes.FETCH_USERS_SUCCESS, payload: usersReserve})

        }
    }
}
