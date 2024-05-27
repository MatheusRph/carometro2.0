'use client'
import { useClient } from 'next/client';
import React, { useState } from 'react';

import Cadas1 from "@/components/cadas1"
import "./style.css"
import Cadas2 from "@/components/cadas2"
import Cadas3 from "@/components/cadas3"
import Cadas4 from "@/components/cadas4"
import Cadas5 from "@/components/cadas5"

export default function Cadastro() {

    const [status, setStatus] = useState(0);

    return (
        <>
            {status === 0 ? (
                <Cadas1 user={status} setUser={setStatus} />
            ) : status === 1 ? (
                <Cadas2 user={status} setUSer={setStatus}/>
            ) : status === 2 ? (
                <Cadas3 user={status} setUser={setStatus}/>
            ) : status === 3 ? (
                <Cadas4 user={status} setUser={setStatus}/> 
            ) : status === 4 ? (
                <Cadas5 user={status} setUser={setStatus}/>
            ) : ( null )}
        </>
    )
}