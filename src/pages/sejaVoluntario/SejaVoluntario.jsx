import S from "./SejaVoluntario.module.scss";
import { useState } from "react";

const SejaVoluntario = () => {
  const [form, setForm] = useState({
    nome: "",
    email: "",
    telefone: "",
    mensagem: "",
  });

  const [erro, setErrors] = useState({});
  const [successo, setSuccess] = useState(false);

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  function validate() {
    let novoErro = {};

    if (!form.nome.trim()) novoErro.nome = "O nome é obrigatório";
    if (!form.email.trim()) novoErro.email = "O email é obrigatório";
    if (!form.telefone.trim()) novoErro.telefone = "O telefone é obrigatório";
    if (form.email && !form.email.includes("@")) {
      newErro.email = "Digite um email válido";
    }

    setErrors(novoErro);

    return Object.keys(newErrors).length === 0;
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!validate()) return;

    console.log("Form enviado:", form);

    setSuccess(true);

    setForm({
      nome: "",
      email: "",
      telefone: "",
      mensagem: "",
    });

    setErrors({});
  }

  return (
    <main>
      <section className={S.titulo}>
        <h1>Seja Voluntário</h1>
        <p>Junte-se a nós e faça a diferença na vida de pessoas que precisam</p>
      </section>

      <section className={S.Beneficios}>
        <div className={S.beneficioCard}>
          <h3>Impacto Direto</h3>
          <p>Sua dedicação salva vidas e transforma comunidades</p>
        </div>

        <div className={S.beneficioCard}>
          <h3>Crescimento Pessoal</h3>
          <p>Desenvolva habilidades e cresça profissionalmente</p>
        </div>

        <div className={S.beneficioCard}>
          <h3>Comunidade</h3>
          <p>Faça parte de uma rede de profissionais comprometidos</p>
        </div>
      </section>

      <section className={S.FormLabel}>
        <form onSubmit={handleSubmit}>
          <h3>Inscrição para Voluntários</h3>

          {successo && (
            <div className={S.successBox}>
              🎉 Inscrição enviada com sucesso!
            </div>
          )}

          <p className={S.tituloLabel}>Dados Pessoais</p>

          <div className={S.input}>
            <div className={S.field}>
              <input
                type="text"
                name="nome"
                placeholder="Seu Nome *"
                value={form.nome}
                onChange={handleChange}
              />
              {erro.nome && <small>{erro.nome}</small>}
            </div>

            <div className={S.field}>
              <input
                type="email"
                name="email"
                placeholder="Seu Email *"
                value={form.email}
                onChange={handleChange}
              />
              {erro.email && <small>{erro.email}</small>}
            </div>
          </div>

          <div className={S.field}>
            <input
              type="text"
              name="telefone"
              placeholder="Seu Telefone *"
              value={form.telefone}
              onChange={handleChange}
            />
            {erro.telefone && <small>{erro.telefone}</small>}
          </div>

          <p className={S.tituloLabel}>Mensagem Adicional</p>

          <textarea
            name="mensagem"
            placeholder="Conte-nos porque você quer ser voluntário..."
            value={form.mensagem}
            onChange={handleChange}
          ></textarea>

          <p className={S.info}>Entraremos em contato para mais informações</p>

          <button type="submit">Enviar Inscrição</button>
        </form>
      </section>
    </main>
  );
};

export default SejaVoluntario;
