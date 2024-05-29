import { createFactory, useState } from "react";

export default function User({ setUser }) {
  const [cpf, setCpf] = useState('');

  const onChangeCpf = (evt) => {
    setCpf(evt.target.value);
  };

  const handleLogin = async (evt) => {
    evt.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/login/cpf', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ cpf })
      });

      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }

      const json = await response.json();
      console.log(json);
      // Verifica se o usuário foi encontrado
      if (json.ok === 'true') {
        // Muda o estado do usuário para 1
        setUser(1);
        sessionStorage.setItem('key', cpf);

      }

    } catch (err) {
      console.log(err)
      console.log('An error occurred. Please try again.');
    }
  };

  return (
    <form className="form-pai" onSubmit={handleLogin}>
      <div className="interaction">
        <div className="mb-3">
          <h3 className="form-label">Login</h3>
          <div id="helps" className="form-text">Bem-vindo(a) ao Portal Online SENAI-SP</div>
        </div>
        <div className="mb-3">
          <label className="form-label">Usuário</label>
          <input 
            type="text" 
            name="cpf" 
            value={cpf} 
            className="form-control input-usuario" 
            onChange={onChangeCpf} 
            placeholder="Insira seu CPF" 
          />
        </div>
        <button type="submit" className="button-avancar btn btn-danger">Avançar</button>
      </div>
    </form>
  );
}
