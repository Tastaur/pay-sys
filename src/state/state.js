import {combineReducers, compose, createStore} from 'redux'
import orderReducer from './orderReducer'
import {reducer as formReducer} from 'redux-form'


let reducers = combineReducers({
      order: orderReducer,
      form: formReducer,
    }
)

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers());

export default store
