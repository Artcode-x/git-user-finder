import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Main from './pages/Main'

function AppRoutes() {
    return (
        <Routes>
            <Route path="/verification-task" element={<Main />} />
        </Routes>
    )
}
export default AppRoutes
