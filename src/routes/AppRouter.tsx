import { BrowserRouter, Routes, Route } from "react-router-dom"
import { AddCharacterPage, HomePage } from "../pages"

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<HomePage/>} />
                <Route path='/addCharacter' element={<AddCharacterPage/>} />
            </Routes>
        </BrowserRouter>
    )
}
