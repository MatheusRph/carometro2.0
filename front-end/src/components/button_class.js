// ButtonCreateClass.js
'use client'

import React, { useState } from 'react';
import Image from 'next/image'; // Certifique-se de importar corretamente o componente de imagem
import './styles/createpaste.css';

export default function ButtonCreateClass({ user, setUser }) { // Remova o parâmetro 'user' se não for usado

    const handleClick = () => {
        setUser(1);
    };

    return (
        <div className="container d-flex align-items-end flex-row-reverse">
            <button 
                className="flex-row d-flex button-add-paste align-items-center" 
                onClick={handleClick} 
                style={{ border: 'none', background: 'none', padding: 0, cursor: 'pointer' }}
            >
                <Image src="/image/plus.png" alt="Descrição da imagem" width={45} height={45} className="m-3 me-0" />
                <p className="jomhuria-regular">Create class</p>
            </button>
        </div>
    );
}
