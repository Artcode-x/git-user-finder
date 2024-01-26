/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    search: {},
}
// createSlice - выполняет всю работу по созданию редюсера.
// Эта ф-ия принимает объект в котором важны 3 св-ва: 1. name - имя слайса; 2.initialState - задает начальное зн-ие. 3. reducers - принимает объект, в котором каждое св-во содержит редьюсеры. С их помощью мы будем менять состояние
const reducersSlice = createSlice({
    // название слайса - произвольное
    name: 'reducers',
    initialState,
    // actions - указываются в св-ве reducers, ниже:
    reducers: {
        searchStateUpdate: (state, action) => {
            state.search = action.payload
        },
    },
})

export const { searchStateUpdate } = reducersSlice.actions
// экспорт самого редьюсера
export default reducersSlice.reducer
