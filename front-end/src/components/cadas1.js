import './styles/form.css';
import { useState } from 'react';

export default function Cadas1({ setUser }) {

  const [nome, setNome] = useState('');
  const [ cpf, setCpf ] = useState('');

  const onChangeNome = (evt) => {
    setNome(evt.target.value);
  }

  const onChangeCpf = (evt) => {
    setCpf(evt.target.value)
  }


  const sendForm = async (evt) => {
    evt.preventDefault()
    sessionStorage.setItem('nome', nome)
    sessionStorage.setItem('cpf', cpf)
    setUser(1)
  }

 // sessionStorage.getItem('key', nome)

  //Fazer um post para o back - end do CPF

  //Verificação do cpf pelo back-end, utilizando alguma api já pronta

  //Retorno da resposta, se for verdadeiro o cpf, salva no sessionStorage

  return (
    <>
      <form className="form-pai" method='post' onSubmit={sendForm}>
        <div className="interaction">
          <div className="mb-3">
            <h3 className="form-label">Cadastro</h3>
            <div id="formHelp" className="form-text">Bem-vindo(a) ao Portal Online SENAI-SP</div>
          </div>
          <div className="mb-3">
            <label htmlFor="inputNome" className="form-label">Nome do Usuário</label>
            <input
              type="text"
              name='nome'
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
              type="number"
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
        </div>
      </form>
    </>
  );
}