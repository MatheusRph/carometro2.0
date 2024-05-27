import './styles/form.css'

export default function Cadas2() {
    return (
        <>
            <form className="form-pai">
                <div className="interaction">
                    <div className="mb-3">
                        <h3 htmlFor="exampleInputEmail1" className="form-label">Cadastro</h3>
                        <div id="emailHelp" className="form-text">Etapa 2/5</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Email</label>
                        <input type="email" className="form-control input-usuario" id="exampleInputPassword1" placeholder="Insira um email" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Senha</label>
                        <input type="password" className="form-control input-usuario" id="exampleInputPassword1" placeholder="Insira uma senha" />
                    </div>
                    <div className="form-check">
                    </div>
                    <button type="submit" className="button-avancar btn btn-danger">Avançar</button>
                </div>
            </form>
        </>
    )
}