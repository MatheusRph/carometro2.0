"use client"

import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "@/components/Navbar/Navbar";
import React from 'react';
import Container from "@/components/Container/Container";
import Header from "@/components/Header/header";


export default function Turmas() {

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
            <h1 className={styles.titleHeader}>Alunos - Turma</h1>
          </div>
          <div className={`m-2 col-10 gap-5 mt-3 m-0 flex-wrap ${styles.container}`}>



            <div className={`card ${styles.card} pt-4 m-0 d-flex align-items-center`}>
              <Image src="/image/background.png" className={`rounded-circle ${styles.image}`} width={100} height={100}></Image>
              <div className="card-body d-flex flex-column">
                <h5 className="card-title m-0">João</h5>
              </div>
            </div>

            <div className={`card ${styles.card} pt-4 m-0 d-flex align-items-center`}>
              <Image src="/image/background.png" className={`rounded-circle ${styles.image}`} width={100} height={100}></Image>
              <div className="card-body d-flex flex-column">
                <h5 className="card-title m-0">João</h5>
              </div>
            </div>

            <div className={`card ${styles.card} pt-4 m-0 d-flex align-items-center`}>
              <Image src="/image/background.png" className={`rounded-circle ${styles.image}`} width={100} height={100}></Image>
              <div className="card-body d-flex flex-column">
                <h5 className="card-title m-0">João</h5>
              </div>
            </div>

            <div className={`card ${styles.card} pt-4 m-0 d-flex align-items-center`}>
              <Image src="/image/background.png" className={`rounded-circle ${styles.image}`} width={100} height={100}></Image>
              <div className="card-body d-flex flex-column">
                <h5 className="card-title m-0">João</h5>
              </div>
            </div>

            <div className={`card ${styles.card} pt-4 m-0 d-flex align-items-center`}>
              <Image src="/image/background.png" className={`rounded-circle ${styles.image}`} width={100} height={100}></Image>
              <div className="card-body d-flex flex-column">
                <h5 className="card-title m-0">João</h5>
              </div>
            </div>

          </div>
        </main>
      </Container>

      <footer >
        {/* Rodapé */}
      </footer>
    </>
  );
}
