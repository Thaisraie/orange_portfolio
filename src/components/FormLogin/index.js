import { useHref } from 'react-router-dom'
import styles from './styles.module.css'
import ScreenRegister from '../../pages/ScreenRegister'

export default function FormLogin(){
    return(
       
            <form className={styles.form_login}>
                <p className={styles.text_login}>Faça login com email</p>
                <label className={styles.label_email}>Email adress</label>
                <input className={styles.input_email} type='email'></input>
                <label className={styles.label_password}>Password</label>
                <input className={styles.input_password} type='password'></input>
                <button className={styles.btn_entrar}>ENTRAR</button>
                <a className={styles.registrar} href={ScreenRegister}>Cadastre-se</a>
           </form>


    )
}