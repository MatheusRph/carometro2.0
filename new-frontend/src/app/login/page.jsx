'use client'

import Container from "@/components/Container/Container";
import Header from "@/components/Header/Header";
import Navbar from "@/components/Navbar/Navbar";
import styles from "./page.module.css";
import Form from "@/components/Form/Form";
import Button from "@/components/Button/Button";
import Input from "@/components/Input/Input";

import { useState } from "react";


export default function Login() {

    const [status, setStatus] = useState(0);

    return (
        <>
            <Header>
                <Navbar></Navbar>
            </Header>

            <Container>
                {status === 0 ? (
                    <>
                        <main className={`rounded-4 flex-column ${styles.main}`}>
                            <Form>

                                <div className="mb-3">
                                    <h3 className="form-label">Login</h3>
                                    <div id="helps" className="form-text">Bem-vindo(a) ao Portal Online SENAI-SP</div>
                                </div>
                                <Input label="Usuário" type={"text"} placeholder={'Insira seu CPF'} className={`${styles.input}`}></Input>
                                <Button type="submit" className={`btn-danger w-100 ${styles.button}`}>Avançar</Button>

                            </Form>
                        </main>
                    </>
                ) : (
                    <>
                        <main className={`rounded-4 flex-column ${styles.main}`}>
                            <Form>

                                <div className="mb-3">
                                    <h3 className="form-label">Login</h3>
                                    <div id="helps" className="form-text">Bem-vindo(a) ao Portal Online SENAI-SP</div>
                                </div>
                                <Input label="Senha" type={"password"} placeholder={'Insira sua senha'} className={`${styles.input}`}></Input>
                                <Button type="submit" className={`btn-danger w-100 ${styles.button}`}>Entrar</Button>

                            </Form>
                        </main>
                    </>
                )}
            </Container>

        </>
    )
}