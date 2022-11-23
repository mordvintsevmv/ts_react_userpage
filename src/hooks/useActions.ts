import {useDispatch} from "react-redux";
import * as UserActionCreators from '../store/actionCreators/usersActions'
import * as TodoActionCreators from '../store/actionCreators/todoActions'
import * as ProfileActionCreators from '../store/actionCreators/profileActions'
import {bindActionCreators} from "redux";

export const useActions = () =>{
    const dispatch = useDispatch()
    return bindActionCreators({
        ...ProfileActionCreators,
        ...UserActionCreators,
        ...TodoActionCreators
    }, dispatch)
}
