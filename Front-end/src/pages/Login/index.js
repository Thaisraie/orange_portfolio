import './styles.css'
import imgLogin from '../../assets/img/img_login.png'
import FormLogin from './components/FormLogin'
import Footer from '../../components/Footer'

const Login = () => {
    return (
            <div className="conteiner">
                <div className='container-img-login'>
                    <img className="img-login" src={imgLogin} alt='imagem login'/>
                </div>
                <div className='container-form-login'>
            <FormLogin/>
            </div>
            <Footer/>
            </div>
    )
}

export default Login;