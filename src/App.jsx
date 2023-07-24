import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Login } from "./pages/login"
import { Dashboard } from "./pages/Dashboard"
import { Navigator } from "./components/Navigator"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/Login" element={<Login/>}/>
          <Route path="/Dashboard" element={<Dashboard/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
