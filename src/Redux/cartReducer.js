import { ADD_PRODUCT, REMOVE_PRODUCT } from "./Action/actionTypes"

const initialCartState = {
    cart: []
}
const cartReducer = (state = initialCartState.cart, action) => {
    switch (action.type) {
        case ADD_PRODUCT:
            const item = state.find(product => product.id === action.payload.id)
            if (!item) {
                return [...state, { ...action.payload, qty: 1 }]
            }
            else {
                return state.map(product => product.id === action.payload.id ? { ...product, qty: product.qty + 1 } : product)
            }

        case REMOVE_PRODUCT:
            const removedItem = state.find(product => product.id === action.payload.id)
            if (removedItem.qty === 1) {
                return state.filter((product) => product.id !== action.payload.id)
            }
            else {
                return state.map(product => product.id === action.payload.id ? { ...product, qty: product.qty - 1 } : product)
            }

        default:
            return state;
    }


}

export default cartReducer;