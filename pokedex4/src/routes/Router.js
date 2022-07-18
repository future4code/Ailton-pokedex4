import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from "../pages/Home"
import { Pokedex } from "../pages/Pokedex"
import { Detalhes } from "../pages/Detalhes"

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Home />} />
                <Route path="Pokedex" element={<Pokedex />}/>
                <Route path="Detalhes" element={<Detalhes />}/>
            </Routes>
        </BrowserRouter>
    )
    }