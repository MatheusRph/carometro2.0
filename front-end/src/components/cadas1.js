import { useState } from 'react';
import './styles/form.css';

export default function Cadas1() {
  const [cpf, setCpf] = useState('');
  const [nome, setNome] = useState('');
  const [message, setMessage] = useState('');

  const onChangeCpf = (evt) => {
    setCpf(evt.target.value);
  };

  const onChangeNome = (evt) => {
    setNome(evt.target.value);
  };

  const sendE1 = async (evt) => {
    evt.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/teste', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ cpf, nome })
      });

      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }

      const json = await response.json();
      console.log(json);
      setMessage('Cadastro realizado com sucesso!');
    } catch (err) {
      console.log(err);
      setMessage('Ocorreu um erro ao realizar o cadastro.');
    }
  };

  return (
    <>
      <form className="form-pai" onSubmit={sendE1} method='post'>
        <div className="interaction">
          <div className="mb-3">
            <h3 htmlFor="formTitle" className="form-label">Cadastro</h3>
            <div id="formHelp" className="form-text">Bem-vindo(a) ao Portal Online SENAI-SP</div>
          </div>
          <div className="mb-3">
            <label htmlFor="inputNome" className="form-label">Nome do Usuário</label>
            <input
              type="text"
              value={nome}
              onChange={onChangeNome}
              className="form-control input-usuario"
              id="inputNome"
              placeholder="Insira o nome do usuário"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="inputCpf" className="form-label">CPF</label>
            <input
              type="text"
              name='cpf'
              value={cpf}
              onChange={onChangeCpf}
              className="form-control input-usuario"
              id="inputCpf"
              placeholder="Insira o CPF do usuário a ser cadastrado"
            />
          </div>
          <div className="form-check"></div>
          <button type="submit" className="button-avancar btn btn-danger">Avançar</button>
          {message && <div className="mt-3">{message}</div>}
        </div>
      </form>
    </>
  );
}
