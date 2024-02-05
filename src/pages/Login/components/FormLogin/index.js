import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logoGoogle from '../../../../assets/img/icon-google.png'
import './styles.css'
import axios from 'axios'
import { useGoogleLogin } from '@react-oauth/google'

const FormLogin = () => {
    const navigate = useNavigate()
    const [value, setValue] = useState({
        email: "",
        password: "",
    })

const handleChange = (e) => {
    setValue({
        ...value,
        [e.target.name]:e.target.value
    })
}
  const login = async (e) => {
    if(value.email && value.password) {
        e.preventDefault()
    const formData = new FormData();
    formData.append('email', value.email);
    formData.append('password', value.password);

    await axios.post("http://3.239.251.235:8000/api/v1/usuarios/login", formData).then((response) => {
    localStorage.setItem("usersToken", response.data.access_token)
    navigate("/myprojects")
    })
}
  }

  const responseGoogle = useGoogleLogin({
    onSuccess: (res) => { 
        localStorage.setItem("usersTokenGoogle", res.access_token)
        navigate("/myprojects")
  }
  })

    return(
        <div className='login_form_container'>
        <h1 className="title_login">Entre no Orange Portfólio</h1>
        <button className="button_google" onClick={responseGoogle}>
            <img className='google-img' src={logoGoogle} alt='icone google'/>
           Entrar com Google
        </button>
        <div className='text_login_container'>
        <p className="text_login">Faça login com email</p>
        </div>
            <form className="form_login" action="" onSubmit={login}>
                <label className="label_email">Email address</label>
                <input className="input_login" type='email' name='email' value={value.email} onChange={handleChange} required/>
                <label className="label_password">Password</label>
                <input className="input_login" type='password' name='password' value={value.password} onChange={handleChange} required/>
                <button className="btn_entrar" onClick={login}>Entrar</button>
           </form>
           <div className="registrar_btn_container">
           <Link className="registrar_btn" to={'/signup'}>Cadastre-se</Link>
           </div>
           </div>


    )
}

export default FormLogin