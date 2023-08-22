import { Route, Routes } from "react-router-dom"
import { Navbar } from "../Navbar.jsx"
import {
    ResumenPage,
    DisenosPage,
    ProyectosPage,
} from "../pages"

export const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Navbar />}>

                    <Route index element={<ResumenPage />} />

                    <Route path='designs' element={<DisenosPage />} />
                    <Route path='proyects' element={<ProyectosPage />} />
                </Route>
            </Routes>
        </>
    );
}