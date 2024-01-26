// в этом файле инициализируем хранилище и объеденяем все редьюсеры
import { configureStore } from '@reduxjs/toolkit'
import reducersSlice from './reducersSlice'

const store = configureStore({
    reducer: {
        store: reducersSlice,
    },
})
export default store
