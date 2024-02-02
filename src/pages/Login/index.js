import styles from './styles.module.css'
import logo_google from '../../assets/img/logo googleg 48dp.jpg'
import FormLogin from '../../components/FormLogin'

export default function Login(){
    return (
        <div className={styles.conteiner_pai}>
            <div className={styles.conteiner}>
            <h1 className={styles.title}>Entre no Orange Portfolio</h1>
            <button className={styles.button_google}>
                <img src={logo_google}></img>
               Entrar com Google
            </button>
            <FormLogin/>
            </div>
        </div>
    )
}