import './styles/form.css'

export default function Cadas4() {
    return (
        <>
            <form className="form-pai">
                <div className="interaction">
                    <div className="mb-3">
                        <h3 htmlFor="exampleInputEmail1" className="form-label">Cadastro</h3>
                        <div id="emailHelp" className="form-text">Etapa 4/5</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Cidade</label>
                        <input type="text" className="form-control input-usuario" id="exampleInputPassword1" placeholder="Insira uma cidade" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Bairro</label>
                        <input type="text" className="form-control input-usuario" id="exampleInputPassword1" placeholder="Insira o bairro" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">CEP</label>
                        <input type="number" className="form-control input-usuario" id="exampleInputPassword1" placeholder="Insira o cep" />
                    </div>
                    <div className="form-check">
                    </div>
                    <button type="submit" className="button-avancar btn btn-danger">Avançar</button>
                </div>
            </form>
        </>
    )
}