"use client"; // Adicione esta linha no topo do arquivo

import React, { useEffect, useState } from 'react';

export default function Teste() {
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
        <div style={styles.container}>
            <h1 style={styles.title}>Turmas</h1>
            <div style={styles.dataContainer}>
                {turmas ? (
                    <>
                        <p>Total de Turmas: {turmas.length}</p>
                        <div style={styles.cardContainer}>
                            {turmas.map(turma => (
                                <div key={turma.idTurmas} style={styles.card}>
                                    <h2>{turma.descricao}</h2>
                                    <p>Código: {turma.codigo}</p>
                                    <p>Início: {turma.inicio}</p>
                                    <p>Fim: {turma.fim}</p>
                                </div>
                            ))}
                        </div>
                    </>
                ) : (
                    <p>Loading...</p>
                )}
            </div>
            <style jsx>{`
                div {
                    font-family: Arial, sans-serif;
                }
            `}</style>
        </div>
    );
}

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor: '#f0f0f0',
    },
    title: {
        fontSize: '2rem',
        color: '#333',
    },
    dataContainer: {
        marginTop: '20px',
        padding: '20px',
        width: '80%',
        maxWidth: '600px',
        backgroundColor: '#fff',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
        borderRadius: '8px',
        textAlign: 'left',
    },
    cardContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        marginTop: '20px',
    },
    card: {
        width: '300px',
        margin: '10px',
        padding: '20px',
        backgroundColor: '#fff',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
        borderRadius: '8px',
        textAlign: 'left',
    },
};
