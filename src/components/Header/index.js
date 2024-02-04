import { useNavigate } from 'react-router-dom'
import iconHeader from '../../assets/img/icon-header.png'
import iconNotification from '../../assets/img/icon-notification.png'
import iconMenu from '../../assets/img/icon-menu.png'
import './styles.css'
import { useState } from 'react'
import DropdownMobile from './components/DropdownMobile'
import Dropdown from './components/Dropdown'
import axios from 'axios'


const Header = ({userInfo}) => {
    const [openDropdownMobile, setOpenDropdownMobile] = useState(false)
    const [openDropdown, setOpenDropdown] = useState(false)
    const navigate = useNavigate()

    const redirectToMyProjects = () => {
        navigate("/myprojects") 
    }

    const redirectToDiscovery = () => {
        navigate("/discovery")
    }
    
    const openDropdownMobileFunction = () => {
        setOpenDropdownMobile(!openDropdownMobile)
    }

    const openDropdownFunction = () => {
        setOpenDropdown(!openDropdown)
    }

    return (
        <div className='header'>
            <div className='header-icon-container'>
            <img className='header-menu' src={iconMenu} alt='Menu Hamburguer' onClick={openDropdownMobileFunction}/>
            <img className='header-icon' src={iconHeader} alt="ícone"/>
            {openDropdownMobile === true ? <DropdownMobile userInfo={userInfo}/> : null}
            </div>
            <div className='container-title' >
            <h1 className='header-title' onClick={() => redirectToMyProjects()}>Meus Projetos</h1>
            <h1 className='header-title' onClick={() => redirectToDiscovery()}>Descobrir</h1>
            </div>
            <div className='container-icons' >
            <img className='profile-icon' src={userInfo.imagem} alt='ícone perfil' onClick={() => openDropdownFunction()}/>
            {openDropdown === true ? <Dropdown userInfo={userInfo}/> : null}
            <img className='icon-notification' src={iconNotification} alt='ícone notificação'/>
            </div>
        </div>
        
    )
}

export default Header;