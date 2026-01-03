
import { BrowserRouter } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'
import Home from "./pages/home/home.jsx"
import SejaVoluntario from './pages/sejaVoluntario/SejaVoluntario.jsx'   
import Header from './components/Header/Header.jsx'
import Footer from './components/Footer/Footer.jsx'
import "./globalStyle.scss"

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/SejaVoluntario" element={<SejaVoluntario />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
