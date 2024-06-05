import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "@/components/Navbar/Navbar";
import React from 'react';
import Container from "@/components/Container/Container";
import Header from "@/components/Header/header";


export default function Home() {
  return (
    <>
      {/* Começo da página */}
      <Header>
        <Navbar></Navbar>
      </Header>

      <Container>
        {/* conteúdo principal */}
        <main class={`rounded-4 flex-column ${styles.main}`}>
          {/* seria um layout igual o do login com as turmas. */}
          <div class={`col-12 jomhuria-regular ${styles.title}`}>
            <h1 class={`${styles.titleHeader}`}>Turmas</h1>
          </div>
          <div class={`m-2 col-10 container-turmas ${styles.container}`}>




            <div class={`card ${styles.card}`}>
              {/* <img src="img_avatar.png" alt="Avatar" style="width:100%"> */}
              <div class="container">
                <h2><b>John Doe</b></h2>
                <p>Architect & Engineer</p>
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
