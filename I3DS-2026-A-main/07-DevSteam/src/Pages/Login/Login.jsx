import { useState } from "react";

function Login({ onLoginSuccess }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  function handleLogin() {
    console.log("Email:", email, "Senha:", senha);
    // aqui você futuramente conecta com uma API
    if (onLoginSuccess) {
      onLoginSuccess();
    }
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        maxWidth: "360px",
        margin: "40px auto",
        padding: "24px",
        borderRadius: "12px",
        background: "#1d2f45",
        color: "#fff",
      }}
    >
      <h2>Entrar</h2>

      <input
        type="email"
        placeholder="Digite seu email"
        style={{
          border: "none",
          borderRadius: "8px",
          padding: "12px 14px",
          outline: "none",
        }}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Digite sua senha"
        style={{
          border: "none",
          borderRadius: "8px",
          padding: "12px 14px",
          outline: "none",
        }}
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
      />

      <button
        type="button"
        onClick={handleLogin}
        style={{
          border: "none",
          borderRadius: "8px",
          padding: "12px 14px",
          background: "#84bd00",
          color: "#fff",
          fontWeight: 700,
          cursor: "pointer",
        }}
      >
        Entrar
      </button>
    </div>
  );
}

export default Login;
