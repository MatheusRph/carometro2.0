import Container from "@/components/Container/Container";
import Header from "@/components/Header/Header";
import Navbar from "@/components/Navbar/Navbar";
import styles from "./page.module.css";
import "./style.css"
import Form from "@/components/Form/Form";


export default function Login() {
    return (
        <>
            <Header>
                <Navbar></Navbar>
            </Header>

            <Container>
                <main className={`rounded-4 flex-column ${styles.main}`}>
                    <Form>
                        <div className="interaction">
                            <div className="mb-3">
                                <h3 className="form-label">Login</h3>
                                <div id="helps" className="form-text">Bem-vindo(a) ao Portal Online SENAI-SP</div>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Usuário</label>
                                <input
                                    type="text"
                                    className="form-control input-usuario"
                                    placeholder="Insira seu CPF"
                                />
                            </div>
                            <button type="submit" className="button-avancar btn btn-danger">Avançar</button>
                        </div>
                    </Form>
                </main>
            </Container>

        </>
    )
}