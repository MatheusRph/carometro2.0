import style from "./Input.module.css"

export default function Input({ label, type, id, name, placeholder, value, onChange, className }) {
    return (
        <div className="mb-3">
            <label htmlFor={id} className="form-label">{label}</label>
            <input
                type={type}
                value={value}
                onChange={onChange}
                className={`${className} form-control ${style.input_usuario}`}
                id={id}
                name={name}
                placeholder={placeholder}
            />
        </div>
    );
}
