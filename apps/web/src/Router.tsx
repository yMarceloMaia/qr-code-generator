import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom"
import Login from "./pages/Login"
import { Signup } from "./pages/Signup"
import { Home } from "./pages/Home"

export function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    index
                    element={<Home />}
                />
                <Route
                    path="/login"
                    element={<Login />}
                />
                <Route
                    path="/signup"
                    element={<Signup />}
                />
            </Routes>
        </BrowserRouter>
    )
}