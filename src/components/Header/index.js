import { useNavigate } from 'react-router-dom'
import iconHeader from '../../assets/img/icon-header.png'
import iconProfile from '../../assets/img/icon-profile.png'
import iconNotification from '../../assets/img/icon-notification.png'
import './styles.css'


const Header = () => {
    const navigate = useNavigate()

    const redirectToMyProjects = () => {
        navigate("/myprojects") 
    }

    const redirectToDiscovery = () => {
        navigate("/discovery")
    }

    return (
        <div className='header'>
            <img className='header-icon' src={iconHeader} alt="ícone"/>
            <div className='container-title' >
            <h1 className='header-title' onClick={redirectToMyProjects}>Meus Projetos</h1>
            <h1 className='header-title' onClick={redirectToDiscovery}>Descobrir</h1>
            </div>
            <div className='container-icons' >
            <img className='profile-icon'  src={iconProfile} alt='ícone perfil'/>
            <img className='icon-notification' src={iconNotification} alt='ícone notificação'/>
            </div>
        </div>
    )
}

export default Header;