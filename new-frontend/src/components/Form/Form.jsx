import React from 'react';
import style from './Form.module.css'

export default function Form({ children, method, onSubmit, className }) {
    return (
        <form className={className style.form_control} method={method} onSubmit={onSubmit}>
            {children}
        </form>
    );
}
