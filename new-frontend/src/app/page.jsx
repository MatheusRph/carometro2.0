"use client"

import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "@/components/Navbar/Navbar";
import React, { useEffect, useState } from 'react';
import Container from "@/components/Container/Container";
import Header from "@/components/Header/header";


export default function Home() {

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
    <>
      {/* Começo da página */}
      <Header>
        <Navbar></Navbar>
      </Header>

      <Container>
        {/* conteúdo principal */}
        <main className={`rounded-4 flex-column ${styles.main}`}>
          {/* seria um layout igual o do login com as turmas. */}
          <div className={`col-12 jomhuria-regular ${styles.title}`}>
            <h1 className={`${styles.titleHeader}`}>Turmas</h1>
          </div>
          <div className={`col container-turmas gap-5 mt-3 flex-wrap d-flex ${styles.container}`}>
            {/* Mapeando os dados das turmas e renderizando um card para cada turma */}
            {turmas && turmas.map((turma, index) => (
              <div key={index} className={`card ${styles.card}`}>
                <Image src={turma.fotos} className="card-img-top image m-0" width={300} height={100} />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{turma.codigo}</h5>
                  <p className="card-text">{turma.descricao}</p>
                </div>
              </div>
            ))}
          </div>
        </main>
      </Container>

      <footer >
        {/* Rodapé */}
      </footer>
    </>
  );
}
