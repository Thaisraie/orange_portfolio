import { Link } from 'react-router-dom'
import iconUser from '../../../../assets/img/icon-profile.png'
import iconClose from '../../../../assets/img/icon-close.png'
import './styles.css'

const ViewModal = ({closeModal, values, img}) => {   
    const tags = values.tags.split(" ")

    return (
        <div className="background-view-modal">
            <div className='view-modal-container'>
            <div className='infos'>
            <div className='infos-container'>
            <div className='icon-close-container'>
            <img className='icon-close' src={iconClose} alt='ícone de fechar' onClick={() => closeModal()}/>
            </div> 
                <div className='user-info'>
                    <img  className='user-img' src={iconUser} alt='ícone do usuário'/>
                    <div className='info-column' >
                    <h2 className='user-name'>Thais Siqueira</h2>
                    <h3 className='date' >25/01</h3>
                    </div>
                    </div>  
                </div>
                <div className='info-title'>
                    <h1 className='title'>{values.title}</h1>
                </div>
                <div className='info-tags'>
                    {tags.map((tag) => 
                    <p className='tags'>{tag}</p>
                    )}
                </div>
            </div>
            <div className='img-project-container'>
            <img className='img-project' src={img} alt='imagem do projeto'/>
            </div>
            <p className='describe-text'>{values.describe}</p>
            <h2 className='download-text'>Download</h2>
            <Link className='link-text' to="https://gumroad.com/products/wxCS" target="_blank" rel="noopener noreferrer">{values.link}</Link>           
            </div>
        </div>
    )
}

export default ViewModal;