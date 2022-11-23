import {ProfileAction, ProfileActionsTypes, ProfileState} from "../../types/users";


/*

    INITIAL STATE

 */
const initial_state: ProfileState = {
    user: {
        "id": 0,
        "name": "Empty Profile",
        "username": "empty",
        "email": "empty",
        "address": {
            "street": "empty",
            "suite": "empty",
            "city": "empty",
            "zipcode": "empty",
            "geo": {
                "lat": "empty",
                "lng": "empty"
            }
        },
        "phone": "empty",
        "website": "empty",
        "company": {
            "name": "empty",
            "catchPhrase": "empty",
            "bs": "empty"
        }
    },
    todos: [],
    posts: [],
    albums: [],
    postComments: [],
    loading: false,
    error: null,
    isLocal: false,
}


/*

    REDUCER

 */
export const profileReducer = (state = initial_state, action: ProfileAction): ProfileState => {
    switch (action.type) {

        case ProfileActionsTypes.FETCH_PROFILE:
            return {...state, loading: true, error: null, user: state.user}

        case ProfileActionsTypes.FETCH_PROFILE_TODO_SUCCESS:
            return {...state, loading: false, error: null, todos: action.payload}

        case ProfileActionsTypes.FETCH_PROFILE_TODO_ERROR:
            return {...state, loading: false, error: action.payload}

        case ProfileActionsTypes.FETCH_PROFILE_POSTS_SUCCESS:
            return {...state, loading: false, error: null, posts: action.payload}

        case ProfileActionsTypes.FETCH_PROFILE_POSTS_ERROR:
            return {...state, loading: false, error: action.payload}

        case ProfileActionsTypes.FETCH_PROFILE_COMMENTS_SUCCESS:
            return {...state, loading: false, error: null, postComments: action.payload}

        case ProfileActionsTypes.FETCH_PROFILE_COMMENTS_ERROR:
            return {...state, loading: false, error: action.payload}

        case ProfileActionsTypes.FETCH_PROFILE_ALBUMS_SUCCESS:
            return {...state, loading: false, error: null, albums: action.payload}

        case ProfileActionsTypes.FETCH_PROFILE_ALBUMS_ERROR:
            return {...state, loading: false, error: action.payload}

        case ProfileActionsTypes.FETCH_PROFILE_SUCCESS:
            return {...state, loading: false, error: null, user: action.payload}

        case ProfileActionsTypes.FETCH_PROFILE_ERROR:
            return {...state, loading: false, error: action.payload, user: state.user}

        case ProfileActionsTypes.SET_IS_LOCAL:
            return {...state, isLocal: action.payload}

        default:
            return state;
    }
}