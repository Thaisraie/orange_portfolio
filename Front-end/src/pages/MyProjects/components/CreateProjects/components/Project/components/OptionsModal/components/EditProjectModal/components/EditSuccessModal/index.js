import iconCheck from '../../../../../../../../../../../../assets/img/icon-check.png'
import './styles.css'

const EditSuccessModal = ({closeModal}) => {

    const redirectToMyProjects = () => {
        closeModal()
         window.location.reload()
    }

    return (
        <div className="background-edit-success-modal">
            <div className="edit-success-modal-container">
                <h1 className='edit-success-modal-title'>Edição concluída com sucesso!</h1>
                <div className='edit-success-modal-img-container'>
                <img src={iconCheck} alt='ícone de concluído'/>
                </div>
                <button className='edit-success-modal-btn' onClick={() => redirectToMyProjects()}>Voltar para projetos</button>
            </div>
        </div>
    )
}

export default EditSuccessModal;