import axios from 'axios';
import './styles.css'

const ConfirmDeleteModal = ({closeModal, findId, id, openDeleteModal}) => {

    const deleteProject = () => {
        findId(id)
        axios.delete(`http://3.239.251.235:8000/api/v1/portfolios/${id}`).then(() => {
            openDeleteModal()
            closeModal()
    })
    }

    return (
        <div className="background-confirm-delete-modal">
            <div className="confirm-delete-modal-container">
                <h1 className='confirm-delete-modal-title'>Deseja Excluir?</h1>
                <p className='confirm-delete-modal-text' >Se você prosseguir irá excluir o projeto do seu portfólio</p>
                <div className='confirm-delete-modal-btn-container'>
                <button className='confirm-delete-modal-btn' onClick={() => deleteProject()}>Excluir</button>
                <button className='cancel-delete-modal-btn' onClick={() => closeModal()}>Cancelar</button>
                </div>
            </div>
        </div>
    )
}

export default ConfirmDeleteModal;