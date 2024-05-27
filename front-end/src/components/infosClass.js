import './styles/form.css'

export default function InfoClass() {
    return (
        <>
            <form className="form-pai">
                <div className="interaction">
                    <div className="mb-3">
                        <h3 htmlFor="exampleInputEmail1" className="form-label">Cadastrar Turma</h3>
                        <div id="emailHelp" className="form-text">Realize o cadastro com atenção</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Nome da turma</label>
                        <input type="text" className="form-control input-usuario" id="exampleInputPassword1" placeholder="Insira o nome da turma" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Descrição da turma</label>
                        <input type="text" className="form-control input-usuario" id="exampleInputPassword1" placeholder="Insira a descrição da turma" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Início</label>
                        <input type="date" className="form-control input-usuario" id="exampleInputPassword1" placeholder="Insira a data de início" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Fim</label>
                        <input type="date" className="form-control input-usuario" id="exampleInputPassword1" placeholder="Insira a data de início" />
                    </div>
                    <div className="form-check">
                    </div>
                    <button type="submit" className="button-avancar btn btn-danger">Aplicar</button>
                </div>
            </form>
        </>
    )
}