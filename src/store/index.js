import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk';
import reducers from '../reducers';

export default function configureStore(){
    const store = compose(applyMiddleware(thunk))(createStore)(reducers);
    // const store = createStore(reducers);
    return store;
}
