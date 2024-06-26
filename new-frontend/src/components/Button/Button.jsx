import style from "./Button.module.css"

export default function Button({ type, className, children }) {
    return (
        <button type={type} className={`${className} btn ${style.button}`}>
            {children}
        </button>
    );
}
