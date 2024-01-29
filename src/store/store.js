import { configureStore } from '@reduxjs/toolkit'
import reducersSlice from './reducersSlice'

const store = configureStore({
    reducer: {
        store: reducersSlice,
    },
})
export default store
