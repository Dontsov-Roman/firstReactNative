import {constants} from '../reducers/user';

export function enterName(name){
    return dispatch => {
        dispatch({
            type:constants.ENTER_NAME,
            payload:{name}
        })
    }
}
