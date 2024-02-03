import { useState } from 'react'
import { Link } from 'react-router-dom'
import logoGoogle from '../../../../assets/img/logo googleg 48dp.jpg'
import './styles.css'

const FormLogin = () => {
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
        <div className='login_form_container'>
        <h1 className="title_login">Entre no Orange Portfolio</h1>
        <button className="button_google">
            <img src={logoGoogle} alt='icone google'/>
           Entrar com Google
        </button>
        <div className='text_login_container'>
        <p className="text_login">Faça login com email</p>
        </div>
            <form className="form_login" onSubmit={handleSubmit}>
                <label className="label_email">Email address</label>
                <input className="input_login" type='email' name='email' value={usuario.email} onChange={handleLogin}/>
                <label className="label_password">Password</label>
                <input className="input_login" type='password' name='password' value={usuario.password} onChange={handleLogin}/>
                <button className="btn_entrar">Entrar</button>
           </form>
           <div className="registrar_btn_container">
           <Link className="registrar_btn" to={'/signup'}>Cadastre-se</Link>
           </div>
           </div>


    )
}

export default FormLogin