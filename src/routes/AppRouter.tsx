import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { AddCharacterPage, HomePage } from "../pages"

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<HomePage/>} />
                <Route path='/addCharacter' element={<AddCharacterPage/>} />
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </BrowserRouter>
    )
}
