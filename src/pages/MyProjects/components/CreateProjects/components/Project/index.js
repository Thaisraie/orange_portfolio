import { useState } from 'react'
import iconEdit from '../../../../../../assets/img/icon-edit.png'
import iconProfile from '../../../../../../assets/img/icon-profile.png'
import OptionsModal from './components/OptionsModal'
import DeleteModal from '../../../../../../components/ConfirmDeleteModal/components/DeleteModal'
import "./styles.css"

const Project = ({date, img, tag, id, findId, openViewModal}) => {
const [openOptionsModal, setOpenOptionsModal] = useState(false)
const [openDeleteModal, setOpenDeleteModal] = useState(false)

const tags = tag.split(" ")
const formatDate = new Date(date).toLocaleDateString('pt-BR', {day:"numeric", month:"numeric"})

const openOptionsModalFunction = () => {
    setOpenOptionsModal(!openOptionsModal)
} 

const closeOptionsModalFunction = () => {
    setOpenOptionsModal(false)
}

const openViewModalFunction = (id) => {
    findId(id)
    openViewModal()
}

const openDeleteModalFunction = () => {
    setOpenDeleteModal(true)
} 

const closeDeleteModalFunction = () => {
    setOpenDeleteModal(false)
}

    return (
        <div className='project-container'>
             <div className='project-icon-container'>
                <div className='project-icon' onClick={() => openOptionsModalFunction()}>
                <img src={iconEdit} alt='ícone de editar'/>
                </div>
                {openOptionsModal === true ? <OptionsModal id={id} findId={findId} closeModal={closeOptionsModalFunction} openDeleteModal={openDeleteModalFunction} closeDeleteModal={closeDeleteModalFunction}/> : null}
            </div>
            <div className='project-img-container' onClick={() => openViewModalFunction(id)}>
                <img className='project-img' src={img} alt='imagem do projeto' />
            </div>
            <div className='project-infos'>         
            <div className='project-user-infos'>       
                <img  className='project-profile-img' src={iconProfile} alt='ícone de perfil'/>
                <h1 className='project-name'>Thais Siqueira • {formatDate}</h1>    
            </div>
            <div className='project-info-tags'>
                {tags.length <= 2 ? tags.map((tag) => 
                    <p className='tags'>{tag}</p>
                    ) :  <p className='tags'>...</p>}
                </div>
            </div>
            {openDeleteModal === true ? <DeleteModal closeModal={closeDeleteModalFunction} /> : null}
            </div>
    )
}

export default Project;