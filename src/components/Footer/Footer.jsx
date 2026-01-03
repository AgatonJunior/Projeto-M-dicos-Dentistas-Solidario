import { Link } from "react-router-dom"
import S from "./Footer.module.scss";
import Logo from "../../assets/Logo.png";
import Email from "../../assets/Email.png"
import Telefone from "../../assets/Telefone.png"
import Endereco from "../../assets/Endereco.png"

const Footer = () => {
  return (
    <footer>
      <section className={S.boxFooter}>

        <div className= {S.boxFooterLogo}>
          <img src={Logo} alt="Logo do projeto" />
          <Link to="/">Médicos & Dentistas</Link>
          <p>Saúde e cuidado sem barreiras para toda comunidade.</p>
        </div>
  
        
        
        <div className={S.contato}>
          <h4>Contato</h4>

          <div className={S.email}>
          <img src={Email} alt="Ícone de email" />
          <p>contato@medico-dentista.org</p>
          </div>

          <div className={S.telefone}>
          <img src={Telefone} alt="Ícone de telefone" />
          <p>(11) 3000-0000</p>
          </div>

          <div className={S.endereco}>
          <img src={Endereco} alt="Ícone de endereço" />
          <p>São Paulo/SP</p>
        </div>
        </div>
        
        <div className={S.social}> 
          <h4>Redes Sociais</h4>
          <p>Facebook</p>
          <p>Instagram</p>
          <p>LinkedIn</p>
        </div>
        
      </section>
        <p className={S.copyright}>© 2025 Médicos e Dentistas pela Comunidade. Todos os direitos reservados.</p>

    </footer>
  )
}

export default Footer
