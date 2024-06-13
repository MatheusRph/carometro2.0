'use client'

import Navbar from '@/components/Navbar/Navbar';
import styles from './page.module.css';
import Container from '@/components/Container/Container';
import Header from '@/components/Header/Header';
import Form from '@/components/Form/Form';
import Input from '@/components/Input/Input';
import Button from '@/components/Button/Button';
import { useState } from 'react';

export default function Cadastro() {
    const [cep, setCep] = useState('');
    const [address, setAddress] = useState({
        rua: '',
        bairro: '',
        cidade: '',
        estado: ''
    });

    const limpaFormularioCep = () => {
        setAddress({
            rua: '',
            bairro: '',
            cidade: '',
            estado: ''
        });
    };

    const meuCallback = (conteudo) => {
        if (!('erro' in conteudo)) {
            setAddress({
                rua: conteudo.logradouro,
                bairro: conteudo.bairro,
                cidade: conteudo.localidade,
                estado: conteudo.uf
            });
        } else {
            limpaFormularioCep();
            alert('CEP não encontrado.');
        }
    };

    const searchCep = (valor) => {
        const cleanedCep = valor.replace(/\D/g, '');

        if (cleanedCep !== '') {
            const validacep = /^[0-9]{8}$/;

            if (validacep.test(cleanedCep)) {
                setAddress({
                    rua: '...',
                    bairro: '...',
                    cidade: '...',
                    estado: '...'
                });

                fetch(`https://viacep.com.br/ws/${cleanedCep}/json/`)
                    .then(response => response.json())
                    .then(data => meuCallback(data))
                    .catch(() => {
                        limpaFormularioCep();
                        alert('Erro ao buscar CEP.');
                    });
            } else {
                limpaFormularioCep();
                alert('Formato de CEP inválido.');
            }
        } else {
            limpaFormularioCep();
        }
    };

    const [status, setStatus] = useState(3);

    return (
        <>
            <Header>
                <Navbar />
            </Header>

            <Container>
                {status === 0 && (
                    <main className={`rounded-4 flex-column ${styles.main}`}>
                        <Form>
                            <div className="mb-3">
                                <h3 className="form-label">Cadastro</h3>
                                <div id="helps" className="form-text">Bem-vindo(a) ao Portal Online SENAI-SP</div>
                            </div>
                            <Input label={'Nome do usuário'} type={'text'} placeholder={'Insira o nome do usuário'} className={`form-control ${styles.input}`} />
                            <Input label="CPF" type={"text"} placeholder={'Insira o CPF'} className={`${styles.input}`} />
                            <Button type="button" className={`btn-danger w-100 ${styles.button}`} onClick={() => setStatus(1)}>Avançar</Button>
                        </Form>
                    </main>
                )}
                {status === 1 && (
                    <main className={`rounded-4 flex-column ${styles.main}`}>
                        <Form>
                            <div className='mb-3'>
                                <h3 className='form-label'>Cadastro</h3>
                                <div id="helps" className='form-text'>Bem vindo(a) ao Portal Online do SENAI-SP</div>
                            </div>
                            <Input label={'Email'} type={'email'} placeholder={'Digite o email'} className={`${styles.input}`} />
                            <Input label={'Senha'} type={'password'} placeholder={'Digite a senha'} className={`${styles.input}`} />
                            <Button type={'button'} className={`btn-danger w-100 ${styles.button}`} onClick={() => setStatus(2)}>Avançar</Button>
                        </Form>
                    </main>
                )}
                {status === 2 && (
                    <main className={`rounded-4 flex-column ${styles.main}`}>
                        <Form>
                            <div className='mb-3'>
                                <h3 className='form-label'>Cadastro</h3>
                                <div id="helps" className='form-text'>Bem vindo(a) ao Portal Online do SENAI-SP</div>
                            </div>
                            <Input label={'Telefone'} type={'tel'} placeholder={'Digite o telefone'} className={`${styles.input}`} />
                            <Input label={'CEP'} type={'number'} placeholder={'Digite o CEP'} className={`${styles.input}`} onBlur={(e) => searchCep(e.target.value)} />
                            <Button type={'button'} className={`btn-danger w-100 ${styles.button}`} onClick={() => setStatus(3)}>Avançar</Button>
                        </Form>
                    </main>
                )}
                {status === 3 && (
                    <main className={`rounded-4 flex-column ${styles.main}`}>
                        <Form>
                            <div className='mb-3'>
                                <h3 className='form-label'>Cadastro</h3>
                                <div id="helps" className='form-text'>Bem vindo(a) ao Portal Online do SENAI-SP</div>
                            </div>
                            <Input label={'Estado'} type={'text'} placeholder={'Digite o estado'} value={address.estado} className={`${styles.input}`} readOnly />
                            <Input label={'Cidade'} type={'text'} placeholder={'Digite a cidade'} value={address.cidade} className={`${styles.input}`} readOnly />
                            <Button type={'button'} className={`btn-danger w-100 ${styles.button}`} onClick={() => setStatus(4)}>Avançar</Button>
                        </Form>
                    </main>
                )}
                {status === 4 && (
                    <main className={`rounded-4 flex-column ${styles.main}`}>
                        <Form>
                            <div className='mb-3'>
                                <h3 className='form-label'>Cadastro</h3>
                                <div id="helps" className='form-text'>Bem vindo(a) ao Portal Online do SENAI-SP</div>
                            </div>
                            <Input label={'Bairro'} type={'text'} placeholder={'Digite o bairro'} value={address.bairro} className={`${styles.input}`} readOnly />
                            <Input label={'Rua'} type={'text'} placeholder={'Digite a rua'} value={address.rua} className={`${styles.input}`} readOnly />
                            <Button type={'button'} className={`btn-danger w-100 ${styles.button}`} onClick={() => setStatus(5)}>Avançar</Button>
                        </Form>
                    </main>
                )}
                {status === 5 && (
                    <main className={`rounded-4 flex-column ${styles.main}`}>
                        <Form>
                            <div className='mb-3'>
                                <h3 className='form-label'>Cadastro</h3>
                                <div id="helps" className='form-text'>Bem vindo(a) ao Portal Online do SENAI-SP</div>
                            </div>
                            <Input label={'Foto'} type={'file'} className={`${styles.input}`} />
                            <Input label={'Tipo de usuário'} type={'text'} placeholder={'Digite o tipo de usuário'} className={`${styles.input}`} />
                            <Button type={'submit'} className={`btn-danger w-100 ${styles.button}`}>Finalizar</Button>
                        </Form>
                    </main>
                )}
            </Container>
        </>
    );
}
