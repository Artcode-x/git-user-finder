/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    user: {},
    search: {},
    searchUserName: {},
    filter: true,
    pageNumber: 1,
    totalPagesFound: {},
    textInInputSearch: {},
    flag: false,
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
        },
        setPageNumber: (state, action) => {
            state.pageNumber = action.payload
        },
        updateTotalPagesCount: (state, action) => {
            state.totalPagesFound = action.payload
        },
        updTextInInputSearch: (state, action) => {
            state.textInInputSearch = action.payload
        },
        setFlag: (state, action) => {
            state.flag = action.payload
        },
        setUser: (state, action) => {
            state.user = action.payload
        },
    },
})

export const {
    searchStateUpdate,
    saveSearchUser,
    filterUpdate,
    setPageNumber,
    updateTotalPagesCount,
    updTextInInputSearch,
    setFlag,
    setUser,
} = reducersSlice.actions
export default reducersSlice.reducer
