import React from 'react';

export default function Form({ children, method, onSubmit, className }) {
    return (
        <form className={className} method={method} onSubmit={onSubmit}>
            {children}
        </form>
    );
}
