'use client'
import User from "@/components/user.js";
import './style.css';
import { useClient } from 'next/client';
import Password from "@/components/password";
import React, { useState } from 'react';

export default function Login() {

    const [cpf, setCpf] = useState ('')


    const [status, setStatus] = useState(0);

    return (
        <>
            {status === 0 ? (
                <>
                    <User user={status} setUser={setStatus} />
                </>
            ) : (
                <>
                    <Password />
                </>
            )}
        </>
    );
}
