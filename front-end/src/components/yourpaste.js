"use client"

import React, { useEffect, useState } from 'react';
import './styles/yourpaste.css';
import Image from 'next/image';

export default function Yourpastes() {
    const redirectToTurmas = () => {
        window.location.assign('/turmas');
    };

    const [turmas, setTurmas] = useState(null);

    useEffect(() => {
        fetch('http://localhost:3000/turmas')
            .then(response => response.json())
            .then(data => setTurmas(data))
            .catch(error => {
                console.error('There has been a problem with your fetch operation:', error);
            });
    }, []);

    return (
        <div className="container col-8 text-center yourpastes d-flex">
            <div className="col-12 align-items-start d-flex flex-column">
                <div className="col-12 div-input d-flex align-items-center justify-content-center">
                    <div className='input-wrapper nav-brand'>
                        <Image src="/image/search.png" alt="a" className="search-img" width={30} height={30} />
                        <input className='col-11 jomhuria-regular' placeholder='Search...' />
                    </div>
                </div>
                <div className="col div-class col-12 d-flex flex-wrap justify-content-center">

                    {turmas ? (
                        <>
                            {turmas.map(turma => (
                                <button key={turma.idTurmas} className="" onClick={redirectToTurmas} style={{ border: 'none', background: 'none', cursor: 'pointer' }}>
                                    <div className='class idev'>
                                        <h2>{turma.codigo}</h2>
                                    </div>
                                </button>
                            ))}
                        </>

                    ) : (
                        <></>
                    )}

                    {/* <button className="" onClick={redirectToTurmas}
                        style={{ border: 'none', background: 'none', padding: 0, cursor: 'pointer' }}>
                        <div className='class idev'>
                            <h2>Idev-3</h2>
                        </div>
                    </button> */}
                    
                </div>
            </div>
        </div >
    );
}
