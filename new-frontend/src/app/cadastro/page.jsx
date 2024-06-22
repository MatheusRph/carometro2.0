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

    const [status, setStatus] = useState(0);

    //Consts useStates das infos
    const [cep, setCep] = useState('')
    const [estado, setEstado] = useState('');
    const [cidade, setCidade] = useState('');
    const [bairro, setBairro] = useState('');
    const [rua, setRua] = useState('');
    const [ numero, setNumero ] = useState('')

    const onchangeNumero = (evt) => {
        setNumero(evt.target.value)
        numero.replace(/\D/g, '');
    }

    const onChangeCep = (evt) => {
        setCep(evt.target.value)
        cep.replace(/\D/g, '');
    }

    const onChangeEstado = (evt => {
        console.log('O cep:' + cep)
    })

    const sendForm = (evt) => {
        evt.preventDefault(); // Evita o recarregamento da página

        // Verifica se é a etapa onde o CEP está sendo validado
        if (status === 2) {

            function conteudo(response) {
                setEstado(response.uf);
                setCidade(response.localidade);
                setBairro(response.bairro);
                setRua(response.logradouro);
            }

            // Validação do CEP
            const validacep = /^[0-9]{8}$/;

            if (!validacep.test(cep)) {
                alert('CEP inválido');
                return; // Retorna para não avançar o formulário se o CEP for inválido
            }

            // URL para consultar o CEP na API do ViaCEP
            const url = `https://viacep.com.br/ws/${cep}/json/`;

            // Consulta do CEP na API
            fetch(url)
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`Erro ao buscar CEP: ${response.status}`);
                    }
                    return response.json();
                })
                .then(data => {
                    // Verifica se a consulta retornou dados válidos
                    if (data.erro) {
                        throw new Error('CEP não encontrado');
                    }

                    // Manipula os dados do CEP, se necessário
                    console.log(data);

                    conteudo(data)


                    // Avança para a próxima etapa do formulário
                    setStatus(status + 1);
                })
                .catch(error => {
                    console.error('Erro na requisição:', error);
                    alert('Erro ao buscar o CEP');
                });
        } else {
            // Para outras etapas do formulário, apenas avance se não estiver no estado 5
            if (status !== 5 && status < 5) {
                setStatus(status + 1);
            }
        }
    };

    //Verificação do cpf, no banco de dados, verificar se o cpf já é existente ou não no cadastro.
    //Começa o cadastro de novo.

    

    return (
        <>
            <Header>
                <Navbar />
            </Header>

            <Container>
                {status === 0 && (
                    <main className={`rounded-4 flex-column ${styles.main}`}>
                        <Form onSubmit={sendForm}>
                            <div className="mb-3">
                                <h3 className="form-label">Cadastro</h3>
                                <div id="helps" className="form-text">Bem-vindo(a) ao Portal Online SENAI-SP</div>
                            </div>
                            <Input label={'Nome do usuário'} type={'text'} placeholder={'Insira o nome do usuário'} className={`form-control ${styles.input}`} />
                            <Input label="CPF" type={"text"} placeholder={'Insira o CPF'} className={`${styles.input}`} />
                            <Button type="submit" className={`btn-danger w-100 ${styles.button}`} >Avançar</Button>
                        </Form>
                    </main>
                )}
                {status === 1 && (
                    <main className={`rounded-4 flex-column ${styles.main}`}>
                        <Form onSubmit={sendForm}>
                            <div className='mb-3'>
                                <h3 className='form-label'>Cadastro</h3>
                                <div id="helps" className='form-text'>Bem vindo(a) ao Portal Online do SENAI-SP</div>
                            </div>
                            <Input label={'Email'} type={'email'} placeholder={'Digite o email'} className={`${styles.input}`} />
                            <Input label={'Senha'} type={'password'} placeholder={'Digite a senha'} className={`${styles.input}`} />
                            <Button type="submit" className={`btn-danger w-100 ${styles.button}`}>Avançar</Button>
                        </Form>
                    </main>
                )}
                {status === 2 && (
                    <main className={`rounded-4 flex-column ${styles.main}`}>
                        <Form onSubmit={sendForm}>
                            <div className='mb-3'>
                                <h3 className='form-label'>Cadastro</h3>
                                <div id="helps" className='form-text'>Bem vindo(a) ao Portal Online do SENAI-SP</div>
                            </div>
                            <Input label={'Telefone'} type={'tel'} placeholder={'Digite o telefone'} className={`${styles.input}`} />
                            <Input label={'CEP'} type={'number'} placeholder={'Digite o CEP'} onChange={onChangeCep} className={`${styles.input}`} />
                            <Button type="submit" className={`btn-danger w-100 ${styles.button}`}>Avançar</Button>
                        </Form>
                    </main>
                )}
                {status === 3 && (
                    <main className={`rounded-4 flex-column ${styles.main}`}>
                        <Form onSubmit={sendForm}>
                            <div className='mb-3'>
                                <h3 className='form-label'>Cadastro</h3>
                                <div id="helps" className='form-text'>Bem vindo(a) ao Portal Online do SENAI-SP</div>
                            </div>
                            <Input id='estado' value={estado} label={'Estado'} onChange={onChangeEstado} type={'text'} placeholder={'Digite o estado'} className={`${styles.input}`}/>
                            <Input id='cidade' value={cidade} label={'Cidade'} type={'text'} placeholder={'Digite a cidade'} className={`${styles.input}`}/>
                            <Button type="submit" className={`btn-danger w-100 ${styles.button}`}>Avançar</Button>
                        </Form>
                    </main>
                )}
                {status === 4 && (
                    <main className={`rounded-4 flex-column ${styles.main}`}>
                        <Form onSubmit={sendForm}>
                            <div className='mb-3'>
                                <h3 className='form-label'>Cadastro</h3>
                                <div id="helps" className='form-text'>Bem vindo(a) ao Portal Online do SENAI-SP</div>
                            </div>
                            <Input id='bairro' value={bairro} label={'Bairro'} type={'text'} placeholder={'Digite o bairro'} className={`${styles.input}`}/>
                            <Input id='rua' value={rua} label={'Rua'} type={'text'} placeholder={'Digite a rua'} className={`${styles.input}`}/>
                            <Input id='nmr' value={numero} onChange={onchangeNumero} label={'Número'} type={'number'} placeholder={'Digite o número da residência'} className={`${styles.input}`}></Input>
                           <Button type="submit" className={`btn-danger w-100 ${styles.button}`}>Avançar</Button>
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
