import { useState } from "react";
import "./styles/form.css";

export default function Password() {
  const [senha, setSenha] = useState('');

  // Atualiza o estado com a senha inserida
  const onChangeSenha = (evt) => {
    setSenha(evt.target.value);
  }

  const cpf = localStorage.getItem('key');

  // Envia a senha para a API
  const sendPassword = async (evt) => {
    evt.preventDefault();
    try {
      const requestBody = { senha, cpf };
      console.log(requestBody);

      const response = await fetch('http://localhost:3000/login/password', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestBody)
      });

      const json = await response.json();
      console.log("Resposta da API:", json);

      if (json.ok === true) {
        window.location.replace('/');
      }

    } catch (err) {
      console.log(err);
    }
  } 

  return (
    <form className="form-pai" onSubmit={sendPassword} method="POST">
      <div className="interaction">
        <div className="mb-3">
          <h3 htmlFor="exampleInputPassword1" className="form-label">Digite sua senha</h3>
          <div id="emailHelp" className="form-text"></div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Senha</label>
          <input type="password" name="senha" value={senha} onChange={onChangeSenha} className="form-control input-usuario" id="exampleInputPassword1" placeholder="Insira sua senha" />
        </div>
        <div className="form-check">
        </div>
        <button type="submit" className="button-avancar btn btn-danger">Avançar</button>
      </div>
    </form>
  );
}
