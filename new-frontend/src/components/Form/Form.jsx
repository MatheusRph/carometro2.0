import React from 'react';
import style from './Form.module.css'

export default function Form({ children, method, onSubmit, className }) {
    return (
        <form className={`form-pai ${className}`} method={method} onSubmit={onSubmit}>
            <div className={style.interaction}>
                {children}
            </div>
        </form>
    );
}
