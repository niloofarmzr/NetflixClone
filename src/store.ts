import { configureStore } from '@reduxjs/toolkit'
import userReducer from './features/userSlice/slice.ts'
// ...

const store = configureStore({
    reducer: {
        user: userReducer
    },
})

export default store;