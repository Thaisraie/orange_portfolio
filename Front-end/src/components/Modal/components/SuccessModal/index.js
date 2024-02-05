import iconCheck from '../../../../assets/img/icon-check.png'
import './styles.css'

const SuccessModal = ({closeModal}) => {

    const redirectToMyProjects = () => {
        closeModal()
        window.location.reload()
    }

    return (
        <div className="background-success-modal">
            <div className="success-modal-container">
                <h1 className='success-modal-title'>Projeto adicionado com sucesso!</h1>
                <div className='success-modal-img-container'>
                <img src={iconCheck} alt='ícone de concluído'/>
                </div>
                <button className='success-modal-btn' onClick={() => redirectToMyProjects()}>Voltar para projetos</button>
            </div>
        </div>
    )
}

export default SuccessModal;