import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk';
import reducers from '../reducers';

export function configureStore(){
    const store = compose(applyMiddleware(thunk))(createStore)(reducers);
    // const store = createStore(reducers);
    return store;
}
const store = configureStore();

export function isAuth(){
    return store.getState().user.name?true:false;
}

export default store;
