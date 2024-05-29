        ' use client '

        import { useState } from 'react';
        import './styles/form.css';

        export default function Cadas2({ setUser }) {
          const [email, setEmail] = useState('');
          const [senha, setSenha] = useState('');

          const onChangeEmail = (evt) => {
            setEmail(evt.target.value);
          }

          const onChangeSenha = (evt) => {
            setSenha(evt.target.value)
          }

          const sendForm = async (evt) => {
            evt.preventDefault();
            sessionStorage.setItem('email', email)
            sessionStorage.setItem('senha', senha)
            setUser(2)
            // Aqui você pode acessar o valor de nome para enviar junto com o formulário
          }

          return (
            <>
              <form className="form-pai" method='post' onSubmit={sendForm}>
                <div className="interaction">
                  <div className="mb-3">
                    <h3 htmlFor="exampleInputEmail1" className="form-label">Cadastro</h3>
                    <div id="emailHelp" className="form-text">Etapa 2/5</div>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Email</label>
                    <input type="email" name='email' value={email} onChange={onChangeEmail} className="form-control input-usuario" id="exampleInputPassword1" placeholder="Insira um email" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Senha</label>
                    <input type="password" name='senha' value={senha} onChange={onChangeSenha} className="form-control input-usuario" id="exampleInputPassword1" placeholder="Insira uma senha" />
                  </div>
                  <div className="form-check"></div>
                  <button type="submit" className="button-avancar btn btn-danger">Avançar</button>
                </div>
              </form>
            </>
          );
        }
