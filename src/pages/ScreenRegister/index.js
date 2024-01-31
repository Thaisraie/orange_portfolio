import styles from './styles.module.css'
import FormRegister from '../../components/FormRegister'

export default function ScreenRegister (){

    return (
        <div className={styles.conteiner_pai}>
            <div className={styles.conteiner}>
            <h1 className={styles.title}>Cadastre-se</h1>
            <FormRegister/>
            </div>
        </div>
    )
}