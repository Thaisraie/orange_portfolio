import './styles.css'
import imgLogin from '../../assets/img/img_cadastro.png'
import FormRegister from './components/FormRegister'

export default function SignUp (){

    return (
            <div className="conteiner-register">
                 <div className='container-img-register'>
                    <img className="img-register" src={imgLogin} alt='imagem login'/>
                </div>
                <div className='container-form-register'>
            <FormRegister/>
            </div>
            </div>
    )
    }