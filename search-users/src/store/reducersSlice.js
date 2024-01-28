/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    search: {},
    searchUserName: {},
    filter: true,
}

const reducersSlice = createSlice({
    name: 'reducers',
    initialState,
    reducers: {
        searchStateUpdate: (state, action) => {
            state.search = action.payload
        },
        saveSearchUser: (state, action) => {
            state.searchUserName = action.payload
        },
        filterUpdate: (state, action) => {
            state.filter = action.payload
        }
    },
})

export const { searchStateUpdate, saveSearchUser, filterUpdate } = reducersSlice.actions
export default reducersSlice.reducer
