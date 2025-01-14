import {BrowserRouter} from "react-router-dom"
import './App.css'
import MainRouter from "./pages/MainRouter"
import Navbar from "./components/partials/Navbar"

function App() {

  return (
    <BrowserRouter>
    <Navbar/>
      <MainRouter />
    </BrowserRouter>
  )
}

export default App
