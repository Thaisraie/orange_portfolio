import { useState } from 'react'
import Modal from '../../../../components/Modal'
import SuccessModal from '../../../../components/Modal/components/SuccessModal'
import IconImg from '../../../../assets/img/icon-img.png'
import './styles.css'
import Project from './components/Project'

const CreateProjects = () => {
const [openModal, setOpenModal] = useState(false)
const [openSuccessModal, setOpenSuccessModal] = useState(false)
const [addProject, setAddProject] = useState(false)

const openModalFunction = () => {
    setOpenModal(true)
}

const closeModalFunction = () => {
    setOpenModal(false)
}

const openSuccessModalFunction = () => {
    setOpenSuccessModal(true)
    setOpenModal(false)
}

const closeSuccessModalFunction = () => {
    setOpenSuccessModal(false)
}

    return (
        <div className='my-projects'>
            <h1 className='my-projects-title'>Meus projetos</h1>
            <input className='input' type='text' placeholder='Buscar tags'/>
            {addProject === true ? <Project/> : 
            <div className='box-img-container' onClick={() => openModalFunction()}>
                <img src={IconImg} alt='ícone de arquivo'/>
                <div className='text-container'>
                <p className='first-text'>Adicione seu primeiro projeto</p>
                <p className='second-text'>Compartilhe seu talento com milhares de pessoas</p>
                </div>  
            </div>
            }
            {openModal === true ? <Modal closeModal={closeModalFunction} openSuccessModal={openSuccessModalFunction}/> : null}
            {openSuccessModal === true ? <SuccessModal closeModal={closeSuccessModalFunction} /> : null}
        </div>
    )
}

export default CreateProjects;