import './styles/form.css'

export default function Cadas3() {
    return (
        <>
            <form className="form-pai">
                <div className="interaction">
                    <div className="mb-3">
                        <h3 htmlFor="exampleInputEmail1" className="form-label">Cadastro</h3>
                        <div id="emailHelp" className="form-text">Etapa 3/5</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Telefone</label>
                        <input type="number" className="form-control input-usuario" id="exampleInputPassword1" placeholder="Insira um telefone" />
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
