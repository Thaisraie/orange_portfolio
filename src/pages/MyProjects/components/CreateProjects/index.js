import { useState } from 'react'
import Modal from '../../../../components/Modal'
import IconImg from '../../../../assets/img/icon-img.png'
import './styles.css'

const CreateProjects = () => {
const [openModal, setOpenModal] = useState(false)

const openModalFunction = () => {
    setOpenModal(true)
}

const closeModalFunction = () => {
    setOpenModal(false)
}

    return (
        <div className='my-projects'>
            <h1 className='my-projects-title'>Meus projetos</h1>
            <input className='input' type='text' placeholder='Buscar tags'/>
            <div className='box-img-container' onClick={() => openModalFunction()}>
                <img src={IconImg} alt='ícone de arquivo'/>
                <div className='text-container'>
                <p className='first-text'>Adicione seu primeiro projeto</p>
                <p className='second-text'>Compartilhe seu talento com milhares de pessoas</p>
                </div>  
            </div>
            {openModal === true ? <Modal closeModal={closeModalFunction}/> : null}
        </div>
    )
}

export default CreateProjects;