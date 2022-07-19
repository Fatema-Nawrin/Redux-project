import axios from "axios"
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
const initialState = {
    loading: false,
    products: [],
    error: ''
}
export const fetchProducts = createAsyncThunk('products/fetchProducts', () => {
    return axios.get('https://mocki.io/v1/4da56061-7547-4112-a24d-bb4799b017f5')
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