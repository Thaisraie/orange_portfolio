import { Link } from 'react-router-dom'
import styles from './styles.module.css'

export default function FormLogin(){
    return(
       
            <form className={styles.form_login}>
                <p className={styles.text_login}>Faça login com email</p>
                <label className={styles.label_email}>Email adress</label>
                <input className={styles.input_email} type='email'></input>
                <label className={styles.label_password}>Password</label>
                <input className={styles.input_password} type='password'></input>
                <button className={styles.btn_entrar}>ENTRAR</button>
                <Link className={styles.registrar} to={'/signup'}>Cadastre-se</Link>
           </form>


    )
}