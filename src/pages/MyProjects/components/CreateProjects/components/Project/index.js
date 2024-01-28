import { useState } from 'react'
import iconEdit from '../../../../../../assets/img/icon-edit.png'
import iconProfile from '../../../../../../assets/img/icon-profile.png'
import "./styles.css"
import OptionsModal from './components/OptionsModal'

const Project = () => {
const [openOptionsModal, setOpenOptionsModal] = useState(false)

const openOptionsModalFunction = () => {
    setOpenOptionsModal(!openOptionsModal)
} 
    return (
        <div className='project-container'>
            <div className='project-img'>
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
                <h1 className='project-name'>Thais Siqueira • 00/00</h1>    
            </div>
                <p className='project-tags'>tags</p>
            </div>  
            </div>
    )
}

export default Project;