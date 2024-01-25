import IconImg from '../../assets/img/icon-img.png'
import './styles.css'

const Modal = ({closeModal}) => {
    return (
        <div className="background" >
            <div className='modal-container'>
                <h1 className='title-modal'>Adicionar projeto</h1>
                <div className='column-container'>
                <div className='first-column'>
                <p className='subtitle-modal'>Selecione o conteúdo que você deseja fazer upload</p>
                <div className='box-img-container'>
                <img src={IconImg} alt='ícone de arquivo'/>
                <div className='text-container'>
                <p className='box-text'>Compartilhe seu talento com milhares de pessoas</p>
                </div>
                </div>
                </div>
                <div className='second-column' >
                <input className='input-modal' type='text' placeholder='Título'/>
                <input className='input-modal' type='text' placeholder='Tags'/>
                <input className='input-modal' type='text' placeholder='Link'/>
                <textarea className='textarea' placeholder='Descrição'/>
                </div>
                </div>
                <div className='button-container' >
                <p className='subtitle-modal'>Visualizar publicação</p>
                <button className='primary-button'>Salvar</button>
                <button onClick={() => closeModal()} className='second-button'>Cancelar</button>
                </div>
            </div>
        </div>
    )
}

export default Modal;