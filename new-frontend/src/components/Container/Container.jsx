import styles from './Container.module.css'

export default function Container({ children }) {
    return (
        <>
            <div className={`container ${styles.container}`}>{children}</div>
        </>
    )
}