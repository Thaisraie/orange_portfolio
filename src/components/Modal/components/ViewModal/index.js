import { Link } from 'react-router-dom'
import iconUser from '../../../../assets/img/icon-profile.png'
import iconClose from '../../../../assets/img/icon-close.png'
import img from '../../../../assets/img/project.png'
import './styles.css'

const ViewModal = ({closeModal}) => {
    return (
        <div className="background-view-modal">
            <div className='view-modal-container'>
            <div className='icon-close-container'>
            <img className='icon-close' src={iconClose} alt='ícone de fechar' onClick={() => closeModal()}/>
            </div>   
            <div className='infos' >
                <div className='user-info'>
                    <img  className='user-img' src={iconUser} alt='ícone do usuário'/>
                    <div className='info-column' >
                    <h2 className='user-name'>Thais Siqueira</h2>
                    <h3 className='date' >25/01</h3>
                    </div>
                </div>
                <div className='info-title'>
                    <h1 className='title'>Ecommerce One Page</h1>
                </div>
                <div className='info-tags'>
                    <p className='tags'>UX</p>
                    <p className='tags'>Web</p>
                </div>
            </div>
            <div className='img-project-container'>
            <img className='img-project' src={img} alt='imagem do projeto'/>
            </div>
            <p className='describe-text'>Temos o prazer de compartilhar com vocês uma variação da nosso primeiro recurso gratuito, Monoceros. É um modelo de uma página para mostrar seus produtos. Tentamos redesenhar uma versão mais B2C e minimalista do nosso primeiro template de e-commerce.</p>
            <h2 className='download-text'>Download</h2>
            <Link className='link-text' to="https://gumroad.com/products/wxCS" target="_blank" rel="noopener noreferrer">https://gumroad.com/products/wxCS</Link>           
            </div>
        </div>
        
    )
}

export default ViewModal;