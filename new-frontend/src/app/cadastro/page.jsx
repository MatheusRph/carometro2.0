'use client'

import Navbar from '@/components/Navbar/Navbar'
import styles from './page.module.css'
import Container from '@/components/Container/Container'
import Header from '@/components/Header/Header'
import Form from '@/components/Form/Form'
import Input from '@/components/Input/Input'
import Button from '@/components/Button/Button'
import { useState } from 'react'


export default function Cadastro() {

    const [status, setStatus] = useState(0);
    // Cidade
    // Bairro
    // Telefone
    // Cep tipo de usuário
    // foto

    return (
        <>
            <Header>
                <Navbar></Navbar>
            </Header>

            <Container>

                {status === 0 ? (
                    <main className={`rounded-4 flex-column ${styles.main}`}>
                        <Form>

                            <div className="mb-3">
                                <h3 className="form-label">Cadastro</h3>
                                <div id="helps" className="form-text">Bem-vindo(a) ao Portal Online SENAI-SP</div>
                            </div>
                            <Input label={'Nome do usuário'} type={'text'} placeholder={'Insira o nome do usuário'} className={`form-control ${styles.input}`}></Input>
                            <Input label="CPF" type={"text"} placeholder={'Insira o CPF'} className={`${styles.input}`}></Input>
                            <Button type="submit" className={`btn-danger w-100 ${styles.button}`}>Avançar</Button>

                        </Form>
                    </main>
                ) : status === 1 ? (
                    <main className={`rounded-4 flex-column ${styles.main}`}>
                        <Form>
                            <div className='mb-3'>
                                <h3 className='form-label'>Cadastro</h3>
                                <div id="helps" className='form-text'>Bem vindo(a) ao Portal Online do SENAI-SP</div>
                            </div>
                            <Input label={'Email'} type={'email'} placeholder={'Digite o email'} className={`${styles.input}`}></Input>
                            <Input label={'Senha'} type={'password'} placeholder={'Digite a senha'} className={`${styles.input}`}></Input>
                            <Button type={'submit'} className={`btn-danger w-100 ${styles.button}`}>Avançar</Button>
                        </Form>
                    </main>
                ) : (null)}
            </Container>
        </>
    )
}