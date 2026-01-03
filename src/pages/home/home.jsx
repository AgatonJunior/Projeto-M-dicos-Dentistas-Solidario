import S from "./Home.module.scss";
import Saude from "../../assets/Saude.png";
import Medico from "../../assets/medico.png";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main>
      <section className={S.hero}>
        <div className={S.content}>
          <div>
            <img src={Saude} alt="imagem informativa de saude para todos" />
          </div>
          <h1>Saúde e cuidado sem barreiras</h1>
          <p className={S.text}>
            Um projeto dedicado a oferecer atendimento médico e odontológico
            gratuito para pessoas que mais precisam na nossa comunidade.
          </p>
          <div className={S.boxButton}>
            <Link to="/voluntario">Seja Voluntário</Link>
            <a href="">Como Ajudar</a>
          </div>
        </div>
        <div className={S.imgMedico}>
          <img src={Medico} alt="Imagem de um medico voluntário" />
        </div>
      </section>
      <section className={S.missao}>
        <h2>Nossa Missão</h2>
        <p className={S.missao_text}>
          Transformar vidas através do acesso universal a saúde de qualidade
        </p>
        <div className={S.missao_cards}>
          <article className={S.missao_card}>
            <h3>Acesso Equitativo</h3>
            <p>
              Garantir que todos tenham acesso a cuidados de saúde de qualidade,
              independentemente de sua condição financeira.
            </p>
          </article>
          <article className={S.missao_card}>
            <h3>Acesso Equitativo</h3>
            <p>
              Garantir que todos tenham acesso a cuidados de saúde de qualidade,
              independentemente de sua condição financeira.
            </p>
          </article>
          <article className={S.missao_card}>
            <h3>Acesso Equitativo</h3>
            <p>
              Garantir que todos tenham acesso a cuidados de saúde de qualidade,
              independentemente de sua condição financeira.
            </p>
          </article>
        </div>
      </section>
      <section className={S.impacto}>
        <h2>Nosso Impacto</h2>
        <p className={S.missao_text}>
          Transformando a saúde de nossa comunidade, um paciente de cada vez
        </p>
        <div className={S.impacto_cards}>
          <article className={S.impacto_card}>
            <h3>2,500+</h3>
            <p>Pessoas Atendidas</p>
          </article>
          <article className={S.impacto_card}>
            <h3>150+</h3>
            <p>Profissionais Voluntários</p>
          </article>
          <article className={S.impacto_card}>
            <h3>98%</h3>
            <p>Satisfação dos Pacientes</p>
          </article>
          <article className={S.impacto_card}>
            <h3>5+</h3>
            <p>Anos de Dedicação</p>
          </article>
        </div>
      </section>
    </main>
  );
}