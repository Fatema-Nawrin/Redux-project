import axios from "axios"
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
const initialState = {
    loading: false,
    products: [],
    error: ''
}
export const fetchProducts = createAsyncThunk('products/fetchProducts', () => {
    return axios.get('https://mocki.io/v1/654b9036-74c5-402e-a96e-8e1cf38d20fd')
        .then(res => res.data)
})

const productSlice = createSlice({
    name: 'products',
    initialState,
    extraReducers: builder => {
        builder.addCase(fetchProducts.pending, state => {
            state.loading = true
        })
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.loading = false
            state.products = action.payload
            state.error = ''
        })
        builder.addCase(fetchProducts.rejected, (state, action) => {
            state.loading = false
            state.products = []
            state.error = action.error.message
        })
    }
})
export default productSlice.reducer