import { combineReducers } from 'redux'
import addCartReducer from './addCartReducer'
import wishlistReducer from './wishlistReducer'

export default combineReducers({
  items: addCartReducer,
  wishlist: wishlistReducer,
})