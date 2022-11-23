import {UserAction, UserActionsTypes, UserState} from "../../types/users";


/*

    INITIAL STATE

 */
const initial_state: UserState = {
    users: [],
    loading: false,
    error: null
}


/*

    REDUCER

 */
export const usersReducer = (state = initial_state, action: UserAction): UserState => {
    switch (action.type) {

        case UserActionsTypes.FETCH_USERS:
            return {...state, loading: true, error: null, users: state.users}

        case UserActionsTypes.FETCH_USERS_SUCCESS:
            return {...state, loading: false, error: null, users: action.payload}

        case UserActionsTypes.FETCH_USERS_ERROR:
            return {...state, loading: false, error: action.payload, users: state.users}

        default:
            return state;
    }
}