import './styles.css'
import iconArrow from '../../../../assets/img/icon-arrow.png'
import logoImg from '../../../../assets/img/logo-img.png';
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const FormRegister = () => {
    const navigate = useNavigate()

    const [editUserImg, setEditUserImg] = useState(false)
    const [value, setValue] = useState({
        first_name: "",
        last_name: "",
        email: "",
        password: "",
    })
    const [fileImg, setFileImg] = useState("")
    const [urlFileImg, setUrlFileImg] = useState("")
    const [openAlert, setOpenAlert] = useState(false)

    const handleChange = (e) => {
        setValue({
            ...value,
            [e.target.name]:e.target.value
        })
    }

    const handleFileImg = (e) => {
        if(e.target.files) {
            setFileImg(URL.createObjectURL(e.target.files[0]));
            setUrlFileImg(e.target.files[0])
        }
    }

    const continueRegister = (e) => {
        e.preventDefault()
        if(value.password.length < 9) {
            alert("A senha deve ter no mínimo 8 caracteres. \nA senha deve conter pelo menos um caractere especial.\nA senha deve incluir pelo menos um número. \nA senha deve conter tanto letras maiúsculas quanto minúsculas. \nEvite senhas muito comuns ou fáceis de adivinhar.")
        }
        if(value.password.length >= 8 && 8 && value.last_name && value.first_name && value.email) {
            setEditUserImg(true)
    }}

    const finishRegister = async () => {
        const formData = new FormData();
            formData.append('first_name', value.first_name);
            formData.append('last_name', value.last_name);
            formData.append('email', value.email);
            formData.append('password', value.password);
            formData.append('imagem', urlFileImg);

        await axios.post("http://3.239.251.235:8000/api/v1/usuarios/signup", formData).then(() =>  {
            toast.success('Usuário cadastrado com sucesso!')
            const formDataLogin = new FormData();
                formDataLogin.append('email', value.email);
                formDataLogin.append('password', value.password);
                setTimeout( async () => {
                    await axios.post("http://3.239.251.235:8000/api/v1/usuarios/login", formDataLogin).then((response) => {
                    localStorage.setItem("usersToken", response.data.access_token)
                    navigate("/myprojects")
                    })
                }, 3000)
        })
    }

    const openAlertFunction = () => {
        setOpenAlert(true)
    }


    return !editUserImg ? (
        <div className='register_form_container'>
             <ToastContainer />
            <Link className='back_to_login' to={'/login'}>
              <img className="arrow" src={iconArrow} alt='icone voltar'/>
                <h1 className='back_to_login_text'>Voltar para o Login</h1>
            </Link>
        <h1 className="title_register">Cadastre-se</h1>
            <form className="form_register">
                <div className="conteiner_nome_register">
                    <label className="label_nome_register">Nome</label>
                    <input className="input_register" type='text' name='first_name' value={value.first_name} onChange={handleChange} required></input>
                    <label className="label_sobrenome_register">Sobrenome</label>
                    <input className="input_register" type='text' name='last_name' value={value.last_name} onChange={handleChange} required></input>
                </div>

                <div className='conteiner_email_register'>
                <label className="label_email_register">Email address</label>
                <input className="input_register" type='email' name='email' value={value.email} onChange={handleChange} required></input>
                <label className="label_password_register">Password</label>
                <input className="input_register" type='password' name='password' value={value.password} 
                onChange={handleChange} onClick={() => openAlertFunction()} required></input>
                {openAlert && value.password.length === 0 ? alert("A senha deve ter no mínimo 8 caracteres. \nA senha deve conter pelo menos um caractere especial.\nA senha deve incluir pelo menos um número. \nA senha deve conter tanto letras maiúsculas quanto minúsculas. \nEvite senhas muito comuns ou fáceis de adivinhar.") : null}
                </div>
                <button className="btn_register_register" onClick={continueRegister}>Cadastrar</button>
           </form>
           </div>
           ) :  <div className="edit-img-container">
             <ToastContainer />
           <h1 className='title-edit-img'>Adicionar foto de perfil</h1>
           <div className='edit-img'>
               <label for='user-img'>
                   {fileImg ? <img className="logo-img-user" src={fileImg} alt='logo para editar imagem'/> :
               <img className="logo-img" src={logoImg} alt='logo para editar imagem'/>}
               </label>
               <input type='file' name='user-img' id='user-img' accept='image/*' onChange={handleFileImg}/>
           </div>
           <div className='edit-img-btn-container'>
               <button className='edit-img-btn' onClick={() => finishRegister()}>Cadastrar</button>
           </div>
       </div>
}

export default FormRegister