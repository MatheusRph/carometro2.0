export default function FormInput({ label, type, id, name, placeholder }) {
    return (
        <div className="mb-3">
            <label htmlFor={id} className="form-label">{label}</label>
            <input
                type={type}
                className="form-control input-usuario"
                id={id}
                name={name}
                placeholder={placeholder}
            />
        </div>
    );
}
