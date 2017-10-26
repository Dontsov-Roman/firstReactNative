const initState = {
    value:0,
    testText:'TEST'
};
export const constants = {
    INCREMENT:"APP_INCREMENT",
    DECREMENT:"APP_DECREMENT"
}
export default function(state = initState, action){
    switch (action.type) {
        case constants.INCREMENT:{
            const {value} = state;
            value++;
            return {...state, value}
        }
        case constants.DECREMENT:{
            const {value} = state;
            value--;
            return {...state, value}
        }
        default:
            return state;
    }
}
