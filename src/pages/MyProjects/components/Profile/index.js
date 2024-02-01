import { useState } from 'react'
import Modal from '../../../../components/Modal'
import SuccessModal from '../../../../components/Modal/components/SuccessModal'
import iconProfileLarge from '../../../../assets/img/icon-profile-large.png'
import './styles.css'

const Profile = ({userInfo}) => {

const [openModal, setOpenModal] = useState(false)
const [openSuccessModal, setOpenSuccessModal] = useState(false)

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
        <div className='profile'>
            <img className='icon-profile' src={iconProfileLarge} alt="ícone do perfil"/>
            <div>
            <h1 className='profile-title'>{userInfo.nome} {userInfo.sobrenome}</h1>
            <h2 className='profile-subtitle'>Brasil</h2>
            <button className='button' onClick={() => openModalFunction()} >Adicionar Projeto</button>
            </div>
            {openModal === true ? <Modal closeModal={closeModalFunction} openSuccessModal={openSuccessModalFunction} userInfo={userInfo}/> : null}
            {openSuccessModal === true ? <SuccessModal closeModal={closeSuccessModalFunction} /> : null}
        </div>
    )
}

export default Profile;