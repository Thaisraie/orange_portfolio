import './styles.css'
import iconArrow from '../../../../assets/img/icon-arrow.png'
import { Link } from 'react-router-dom'

const FormRegister = () => {
    return(

        <div className='register_form_container'>
            <Link className='back_to_login' to={'/login'}>
              <img className="arrow" src={iconArrow} alt='icone voltar'/>
                <h1 className='back_to_login_text'>Voltar para o Login</h1>
            </Link>
        <h1 className="title_register">Cadastre-se</h1>
            <form className="form_register">
                <div className="conteiner_nome_register">
                    <label className="label_nome_register">Nome</label>
                    <input className="input_register" type='text'></input>
                    <label className="label_sobrenome_register">Sobrenome</label>
                    <input className="input_register" type='text'></input>
                </div>

                <label className="label_email_register">Email address</label>
                <input className="input_register" type='email'></input>
                <label className="label_password_register">Password</label>
                <input className="input_register" type='password'></input>
                <button className="btn_register_register">Cadastrar</button>

           </form>
           </div>

    )
}

export default FormRegister