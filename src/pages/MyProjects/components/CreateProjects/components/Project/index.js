import { useState } from 'react'
import iconEdit from '../../../../../../assets/img/icon-edit.png'
import OptionsModal from './components/OptionsModal'
import DeleteModal from './components/OptionsModal/components/ConfirmDeleteModal/components/DeleteModal'
import EditSuccessModal from './components/OptionsModal/components/EditProjectModal/components/EditSuccessModal'
import "./styles.css"

const Project = ({date, title, describe, img, link, tag, id, findId, openViewModal, userInfo}) => {
const [openOptionsModal, setOpenOptionsModal] = useState(false)
const [openDeleteModal, setOpenDeleteModal] = useState(false)
const [openEditSuccessModal, setOpenEditSuccessModal] = useState(false)

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

const openEditSuccessModalFunction = () => {
    setOpenEditSuccessModal(true)
}

const closeEditSuccessModalFunction = () => {
    setOpenEditSuccessModal(false)
}

    return (
        <div className='project-container'>
             <div className='project-icon-container'>
                <div className='project-icon' onClick={() => openOptionsModalFunction()}>
                <img src={iconEdit} alt='ícone de editar'/>
                </div>
                {openOptionsModal === true ? <OptionsModal id={id} findId={findId} closeModal={closeOptionsModalFunction} openDeleteModal={openDeleteModalFunction} closeDeleteModal={closeDeleteModalFunction} img={img} title={title} describe={describe} link={link} tag={tag}  openEditSuccessModal={openEditSuccessModalFunction} userInfo={userInfo}/> : null}
            </div>
            <div className='project-img-container' onClick={() => openViewModalFunction(id)}>
                <img className='project-img' src={img} alt='imagem do projeto' />
            </div>
            <div className='project-infos'>         
            <div className='project-user-infos'>       
                <img  className='project-profile-img' src={userInfo.imagem} alt='ícone de perfil'/>
                <h1 className='project-name'>{userInfo.first_name} {userInfo.last_name} • {formatDate}</h1>    
            </div>
            <div className='project-info-tags'>
                {tags.length <= 2 ? tags.map((tag) => 
                    <p className='tags'>{tag}</p>
                    ) : <>
                    <p className='tags'>{tags[0]}</p>
                    <p className='tags'>{tags[1]}</p>   
                    <p className='tags'>...</p>  
                    </>                    
                }
                </div>
            </div>
            {openDeleteModal === true ? <DeleteModal closeModal={closeDeleteModalFunction} /> : null}
            {openEditSuccessModal === true ? <EditSuccessModal closeModal={closeEditSuccessModalFunction} open/> : null}
            </div>
    )
}

export default Project;