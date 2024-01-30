import { useState } from 'react'
import iconEdit from '../../../../../../assets/img/icon-edit.png'
import iconProfile from '../../../../../../assets/img/icon-profile.png'
import "./styles.css"
import OptionsModal from './components/OptionsModal'

const Project = ({date, img, tag, id, findId, openViewModal, closeViewModal}) => {
const [openOptionsModal, setOpenOptionsModal] = useState(false)

const tags = tag.split(" ")
const formatDate = new Date(date).toLocaleDateString('pt-BR', {day:"numeric", month:"numeric"})

const openOptionsModalFunction = () => {
    setOpenOptionsModal(!openOptionsModal)
} 

const openViewModalFunction = (id) => {
    findId(id)
    openViewModal()
}

    return (
        <div className='project-container'>
            <div className='project-img' onClick={() => openViewModalFunction(id)} style={{ backgroundImage: `url(${img})`}}>
            <div className='project-icon-container'>
                <div className='project-icon' onClick={() => openOptionsModalFunction()}>
                <img src={iconEdit} alt='ícone de editar'/>
                </div>
                {openOptionsModal === true ? <OptionsModal/> : null}
            </div>
            </div>
            <div className='project-infos'>         
            <div className='project-user-infos'>       
                <img  className='project-profile-img' src={iconProfile} alt='ícone de perfil'/>
                <h1 className='project-name'>Thais Siqueira • {formatDate}</h1>    
            </div>
            <div className='project-info-tags'>
                {tags.map((tag) => 
                    <p className='tags'>{tag}</p>
                    )}
                </div>
            </div>  
            </div>
    )
}

export default Project;