import Container from "@/components/Container/Container";
import Header from "@/components/Header/Header";
import Navbar from "@/components/Navbar/Navbar";
import styles from "./page.module.css";
import "./style.css"
import Form from "@/components/Form/Form";
import Button from "@/components/Button/Button";
import Input from "@/components/Input/Input";


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
                            <Input label="Usuário" type={"text"} placeholder={'Insira seu CPF'} className={`form-control ${styles.input}`}></Input>
                            <Button type="submit" className={`btn-danger w-100 ${styles.button}`}>Avançar</Button>
                        </div>
                    </Form>
                </main>
            </Container>

        </>
    )
}