// src/components/Navbar.js
import React from 'react';
import Image from 'next/image';
import styles from './Navbar.module.css';

export default function Navbar() {
    return (
        <>
            <nav className={`navbar navbar-expand-lg ${styles.navbar}`}>
                <div className="container-fluid">
                    <a href="/" className={`navbar-brand ${styles['navbar-brand']}`}>
                        <Image src="https://www.sp.senai.br/images/senai.svg" alt="a" width={150} height={50} />
                    </a>
                    <button className="navbar-toggler justify-content-end" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse text-center" id="navbarNav">
                        <ul className={`navbar-nav text-center ${styles['navbar-nav']}`}>
                            <li className={`${styles['nav-item']}`}>
                                <a className={`nav-link active text-white ${styles['nav-link']}`} aria-current="page" href="/help">Ajuda</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}
