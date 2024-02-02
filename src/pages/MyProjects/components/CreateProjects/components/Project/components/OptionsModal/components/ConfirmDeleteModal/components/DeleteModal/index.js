import iconCheck from '../../../../../../../../../../../../assets/img/icon-check.png'
import './styles.css'

const DeleteModal = ({closeModal}) => {

    const redirectToMyProjects = () => {
        closeModal()
         window.location.reload()
    }

    return (
        <div className="background-delete-modal">
            <div className="delete-modal-container">
                <h1 className='delete-modal-title'>Projeto deletado com sucesso!</h1>
                <div className='delete-modal-img-container'>
                <img src={iconCheck} alt='ícone de concluído'/>
                </div>
                <button className='delete-modal-btn' onClick={() => redirectToMyProjects()}>Voltar para projetos</button>
            </div>
        </div>
    )
}

export default DeleteModal;