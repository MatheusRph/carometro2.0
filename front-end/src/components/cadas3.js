import { useState } from 'react'
import './styles/form.css'

export default function Cadas3({ setUser }) {

    const [ tel, setTel ] = useState('');
    const [ cep, setCep ] = useState('');

    const onChangeTel = (evt) => {
        setTel(evt.target.value)
    }

    const onChangeCep = (evt) => {
        setCep(evt.target.value)
    }

    const sendForm = async(evt) => {
        evt.preventDefault();
        sessionStorage.setItem('tel', tel);
        sessionStorage.setItem('cep', cep);
        setUser(3);
    }

    return (
        <>
            <form className="form-pai" onSubmit={sendForm} method='post'>
                <div className="interaction">
                    <div className="mb-3">
                        <h3 htmlFor="exampleInputEmail1" className="form-label">Cadastro</h3>
                        <div id="emailHelp" className="form-text">Etapa 3/5</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Telefone</label>
                        <input type="number" name='tel' value={tel} onChange={onChangeTel} className="form-control input-usuario" id="exampleInputPassword1" placeholder="Insira um telefone" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">CEP</label>
                        <input type="number" name='cep' value={cep} onChange={onChangeCep} className="form-control input-usuario" id="exampleInputPassword1" placeholder="Insira o cep" />
                    </div>
                    <div className="form-check">
                    </div>
                    <button type="submit" className="button-avancar btn btn-danger">Avançar</button>
                </div>
            </form>
        </>
    )
}
