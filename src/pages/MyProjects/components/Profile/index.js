import { useState } from 'react'
import Modal from '../../../../components/Modal'
import iconProfileLarge from '../../../../assets/img/icon-profile-large.png'
import './styles.css'


const Profile = () => {

const [openModal, setOpenModal] = useState(false)

const openModalFunction = () => {
    setOpenModal(true)
}

const closeModalFunction = () => {
    setOpenModal(false)
}

    return (
        <div className='profile'>
            <img className='icon-profile' src={iconProfileLarge} alt="ícone do perfil"/>
            <div>
            <h1 className='profile-title'>Thais Siqueira</h1>
            <h2 className='profile-subtitle'>Brasil</h2>
            <button className='button' onClick={() => openModalFunction()} >Adicionar Projeto</button>
            </div>
            {openModal === true ? <Modal closeModal={closeModalFunction}/> : null}
        </div>
    )
}

export default Profile;