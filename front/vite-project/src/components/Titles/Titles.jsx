import styles from "./Titles.module.css"

const Titles = ({text}) => {
    return (
        <div>
            <h1 className={styles.title}>{text}</h1>
        </div>
    )
}

export default Titles