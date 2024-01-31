import styles from './styles.module.css'

export default function FormRegister(){
    return(
       
            <form className={styles.form_login}>
                
                    <label className={styles.label_nome}>Nome</label>
                    <input className={styles.input_nome} type='text' placeholder='Primeiro Nome'></input>
                    <label className={styles.label_sobrenome}>Sobrenome</label>
                    <input className={styles.input_sobrenome} type='text' placeholder='Sobrenome'></input>
                

                <label className={styles.label_email}>Email adress</label>
                <input className={styles.input_email} type='email'></input>
                <label className={styles.label_password}>Password</label>
                <input className={styles.input_password} type='password'></input>
                <button className={styles.btn_register}>Registra-se</button>

           </form>


    )
}