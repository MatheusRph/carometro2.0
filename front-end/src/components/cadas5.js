import './styles/form.css'

export default function Cadas5() {
    return (
        <>
            <form className="form-pai">
                <div className="interaction">
                    <div className="mb-3">
                        <h3 htmlFor="exampleInputEmail1" className="form-label">Cadastro</h3>
                        <div id="emailHelp" className="form-text">Etapa 5/5</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Logradouro</label>
                        <input type="text" className="form-control input-usuario" id="exampleInputPassword1" placeholder="Insira o logradouro" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Tipo de Usuário</label>
                        <input type="text" className="form-control input-usuario" id="exampleInputPassword1" placeholder="Insira o tipo de usuário" />
                    </div>
                    <div className="form-check">
                    </div>
                    <button type="submit" className="button-avancar btn btn-danger">Avançar</button>
                </div>
            </form>
        </>
    )
}