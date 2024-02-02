import { Link } from 'react-router-dom'
import styles from './styles.module.css'
import { useState } from 'react'

export default function FormLogin(){
    const [usuario, setUsuario] = useState({
        email:"",
        password:""
    });
    console.log(usuario)
const handleLogin = (event) =>{
    setUsuario((preview) => ({...preview, [event.target.name]:event.target.value}));

}

const handleSubmit = (event) => {

}

    return(
       
            <form className={styles.form_login} onSubmit={handleSubmit}>
                <p className={styles.text_login}>Faça login com email</p>
                <label className={styles.label_email}>Email adress</label>
                <input className={styles.input_email} type='email' name='email' value={usuario.email} onChange={handleLogin}/>
                <label className={styles.label_password}>Password</label>
                <input className={styles.input_password} type='password' name='password' value={usuario.password} onChange={handleLogin}/>
                <button className={styles.btn_entrar}>ENTRAR</button>
                <Link className={styles.registrar} to={'/signup'}>Cadastre-se</Link>
           </form>


    )
}