export const constants = {
    ENTER_NAME:'user_enterName'
}

export default function(state = {name:null}, action){
    switch (action.type) {
        case constants.ENTER_NAME:
            return {...state, name:action.payload.name}
        default:
            return state;
    }
}
