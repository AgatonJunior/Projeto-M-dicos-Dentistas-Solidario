import axios from "axios";
import S from "./sejaVoluntario.module.scss";
import { useState } from "react";
 


// Centralizar a URL evita repetir o endereço em vários lugares.
// Em produção, isso viraria uma variável de ambiente:
//   const API_URL = import.meta.env.VITE_API_URL
// No .env do React (Vite):
//   VITE_API_URL=https://seusite.com.br
// ─────────────────────────────────────────────────────────────
const API_URL = "http://localhost:3000";
 
const SejaVoluntario = () => {
  const [form, setForm] = useState({
    nome: "",
    email: "",
    telefone: "",
    mensagem: "",
  });
 
  const [erros, setErros] = useState({});
  const [sucesso, setSucesso] = useState(false);
  const [carregando, setCarregando] = useState(false);
 

  // vindas do backend (ex: "Email inválido" do middleware)
  //
  // Antes os erros do servidor iam para um alert(). Agora
  // aparecem direto na tela, dentro do formulário.
  // ─────────────────────────────────────────────────────────
  const [erroServidor, setErroServidor] = useState("");
 
  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (erroServidor) setErroServidor("");
  }
 
  function validate() {
    const novosErros = {};
 
    if (!form.nome.trim() || form.nome.trim().length < 3) {
      novosErros.nome = "Nome deve ter no mínimo 3 caracteres";
    }
    if (!form.email.trim()) {
      novosErros.email = "O email é obrigatório";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      novosErros.email = "Digite um email válido";
    }
    if (!form.telefone.trim()) {
      novosErros.telefone = "O telefone é obrigatório";
    }
    if (form.mensagem && form.mensagem.trim().length < 50) {
      novosErros.mensagem = "A mensagem deve ter no mínimo 50 caracteres";
    }
 
    setErros(novosErros);
    return Object.keys(novosErros).length === 0;
  }
 
  //   // O axios.post envia o objeto "form" como JSON para:
  //   POST http://localhost:3000/cadastros
  //
  // O backend responde com:
  //   201 → { mensagem: "...", dados: { id, nome, ... } }
  //   400 → { erro: "mensagem de erro do middleware" }
  //
  // O axios trata 4xx/5xx como exceção — cai no catch.
  // err.response.data.erro contém a mensagem do backend.
  // ─────────────────────────────────────────────────────────
  async function handleSubmit(e) {
    e.preventDefault();
 
    if (!validate()) return;
 
    setCarregando(true);
    setErroServidor("");
 
    try {
      // axios.post(url, dados) envia Content-Type: application/json
      // O backend lê via req.body (graças ao express.json())
      const resposta = await axios.post(`${API_URL}/cadastros`, {
        nome:     form.nome.trim(),
        email:    form.email.trim(),
        telefone: form.telefone.trim(),
        mensagem: form.mensagem.trim() || undefined,
      });
 
      console.log("Cadastro criado:", resposta.data.dados);
 
      setSucesso(true);
      setForm({ nome: "", email: "", telefone: "", mensagem: "" });
      setErros({});
 
    } catch (err) {
      if (err.response) {
        // err.response.data.erro é a mensagem do seu middleware
        // ex: "Email inválido", "Telefone inválido", etc.
        setErroServidor(
          err.response.data?.erro || "Erro ao enviar. Tente novamente."
        );
      } else {
        setErroServidor(
          "Não foi possível conectar ao servidor. Verifique sua conexão."
        );
      }
      console.error("Erro:", err);
    } finally {
      setCarregando(false);
    }
  }
 
  return (
    <main>
      <section className={S.titulo}>
        <h1>Seja Voluntário</h1>
        <p>Junte-se a nós e faça a diferença na vida de pessoas que precisam</p>
      </section>
 
      <section className={S.beneficios}>
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
 
      <section className={S.formLabel}>
        <form onSubmit={handleSubmit} noValidate>
          <h3>Inscrição para Voluntários</h3>
 
          {sucesso && (
            <div className={S.successBox}>
              🎉 Inscrição enviada com sucesso! Entraremos em contato em breve.
            </div>
          )}
 
          {/* Erro vindo do backend — aparece no topo do form */}
          {erroServidor && (
            <div className={S.errorBox}>
              ⚠️ {erroServidor}
            </div>
          )}
 
          <p className={S.tituloLabel}>Dados Pessoais</p>
 
          <div className={S.inputRow}>
            <div className={S.field}>
              <input
                type="text"
                name="nome"
                placeholder="Seu Nome *"
                value={form.nome}
                onChange={handleChange}
                aria-invalid={!!erros.nome}
              />
              {erros.nome && <small className={S.erro}>{erros.nome}</small>}
            </div>
 
            <div className={S.field}>
              <input
                type="email"
                name="email"
                placeholder="Seu Email *"
                value={form.email}
                onChange={handleChange}
                aria-invalid={!!erros.email}
              />
              {erros.email && <small className={S.erro}>{erros.email}</small>}
            </div>
          </div>
 
          <div className={S.field}>
            <input
              type="tel"
              name="telefone"
              placeholder="Seu Telefone *"
              value={form.telefone}
              onChange={handleChange}
              aria-invalid={!!erros.telefone}
            />
            {erros.telefone && <small className={S.erro}>{erros.telefone}</small>}
          </div>
 
          <p className={S.tituloLabel}>Mensagem Adicional</p>
 
          <textarea
            name="mensagem"
            placeholder="Conte-nos porque você quer ser voluntário... (mínimo 50 caracteres)"
            value={form.mensagem}
            onChange={handleChange}
            rows={4}
            aria-invalid={!!erros.mensagem}
          />
          {erros.mensagem && <small className={S.erro}>{erros.mensagem}</small>}
 
          <p className={S.info}>Entraremos em contato para mais informações</p>
 
          <button type="submit" disabled={carregando}>
            {carregando ? "Enviando..." : "Enviar Inscrição"}
          </button>
        </form>
      </section>
    </main>
  );
};
 
export default SejaVoluntario;