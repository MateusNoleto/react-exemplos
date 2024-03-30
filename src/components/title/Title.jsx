import styles from './Title.module.css'


// exemplo de componente react com children(filhos)


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