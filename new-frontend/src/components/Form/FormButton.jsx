export default function FormButton({ type, className, children }) {
    return (
        <button type={type} className={className}>
            {children}
        </button>
    );
}
