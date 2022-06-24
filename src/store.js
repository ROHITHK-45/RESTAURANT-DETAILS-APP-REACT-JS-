import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {restaurantListReducer} from './REDUCERS/restaurantReducers'

// for handling multiple reducers in store as single unit
const reducers=combineReducers({
 restaurantReducer:restaurantListReducer
})
// assign thunk in to a constant called middleware
const middleware =[thunk]


// for creating store
const store=createStore(reducers,applyMiddleware(...middleware))

export default store








