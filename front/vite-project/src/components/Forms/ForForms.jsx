import styles from "./Forms.module.css"

const ForForms = ({type, label, value, name, placeholder, onChange}) => {
    return (
        <div className={styles.labelInput}>
            <label className={styles.label}>{label}:</label>
            <input className={styles.inputs} type={type} value={value} name={name} placeholder={placeholder} onChange={onChange}     
            />
        </div>
    )
}

export default ForForms