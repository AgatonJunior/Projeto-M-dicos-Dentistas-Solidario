import { Link } from "react-router-dom"
import Logo from "../../assets/Logo.png"
import S from "./Header.module.scss"


const Header = () => {
  return (
    <header>
        <div className={S.boxLogo}>
            <img src={Logo} alt="logo de Coração" />
            <Link to="/">Médicos & Dentistas</Link>
        </div>
        <nav>
            <Link to="/">Home</Link>
            <Link to="/SejaVoluntario">Seja Voluntário</Link>
        </nav>
    </header>
  )
}

export default Header
