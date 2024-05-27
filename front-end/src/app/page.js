'use client'

import React, { useState } from 'react';
import MyNavbar from '@/components/nav-bar';
import Yourpastes from '@/components/yourpaste';
import Infos from '@/components/infosClass';
import ButtonClass from '@/components/button_class';
import 'bootstrap/dist/css/bootstrap.css';
import './style.css';

export default function Carometro() {
    const [status, setStatus] = useState(0);

    // Function to handle redirection
    const redirectToCadastroTurma = () => { 
        window.location.href = '/cadastro/turma';
    };

    return (
        <>
            <MyNavbar />
            {status === 0 ? (
                <>
                    <ButtonClass user={status} setUser={setStatus} />
                    <Yourpastes />
                </>
            ) : (
                // If status is not 0, redirect to '/cadastro/turma'
                redirectToCadastroTurma()
            )}
        </>
    );
}
