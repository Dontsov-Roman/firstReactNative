import {constants} from '../reducers/app';

export function increment(){
    return dispatch => dispatch({type:constants.INCREMENT});
}

export function decrement(){
    return dispatch => dispatch({type:constants.DECREMENT});
}
