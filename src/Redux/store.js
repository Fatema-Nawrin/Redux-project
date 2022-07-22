import { combineReducers } from "redux"
import { configureStore } from '@reduxjs/toolkit'
import products from './productSlice'
import cartReducer from './cartReducer'

const reducer = combineReducers({
    cartReducer, products
})
const store = configureStore({ reducer })

export default store;