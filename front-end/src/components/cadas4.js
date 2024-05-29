import React, { useState } from 'react';

export default function Cadas4({ setUser }) {
    const [city, setCity] = useState('');
    const [bairro, setBairro] = useState('');

    const onChangeCity = (evt) => {
        setCity(evt.target.value);
    }

    const onChangeBairro = (evt) => {
        setBairro(evt.target.value);
    }

    const sendForm = async (evt) => {
        evt.preventDefault();
        sessionStorage.setItem('city', city);
        sessionStorage.setItem('bairro', bairro);
        setUser(4);
    }

    return (
        <form className="form-pai" onSubmit={sendForm}>
            <div className="interaction">
                <div className="mb-3">
                    <h3 htmlFor="exampleInputEmail1" className="form-label">Cadastro</h3>
                    <div id="emailHelp" className="form-text">Etapa 4/5</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="cityInput" className="form-label">Cidade</label>
                    <input
                        type="text"
                        value={city}
                        onChange={onChangeCity}
                        className="form-control input-usuario"
                        id="cityInput"
                        placeholder="Insira uma cidade"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="bairroInput" className="form-label">Bairro</label>
                    <input
                        type="text"
                        value={bairro}
                        onChange={onChangeBairro}
                        className="form-control input-usuario"
                        id="bairroInput"
                        placeholder="Insira o bairro"
                    />
                </div>
                <div className="form-check">
                </div>
                <button type="submit" className="button-avancar btn btn-danger">Avançar</button>
            </div>
        </form>
    );
}
