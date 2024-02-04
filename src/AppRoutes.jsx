import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Main from './pages/Main'

function AppRoutes() {
    return (
        <Routes>
            <Route path="/git-user-finder" element={<Main />} />
        </Routes>
    )
}
export default AppRoutes
