import styles from './Title.module.css'

const constante = 'titulo'

function Title (props){
    return(
        <h1 className={styles.title}>
            {props.text}
            {props.children}
        </h1>
    )
}

export default Title