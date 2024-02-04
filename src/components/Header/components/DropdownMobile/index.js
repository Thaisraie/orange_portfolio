import { useNavigate } from 'react-router-dom'
import iconExit from '../../../../assets/img/icon-exit.png'
import './styles.css'


const DropdownMobile = ({userInfo, logout}) => {
    const navigate = useNavigate()

    const redirectToMyProjects = () => {
        navigate("/myprojects") 
    }

    const redirectToDiscovery = () => {
        navigate("/discovery")
    }

    return (
        <div className='dropdown-mobile'>
            <div className='info-user-dropdown-mobile'>
                <h1 className='title-dropdown-mobile'>{userInfo.first_name} {userInfo.last_name}</h1>
                <h2 className='text-dropdown-mobile'>{userInfo.email}</h2>
            </div>
            <div className='pages-dropdown-mobile'>
                <h1 className='title-dropdown-mobile' onClick={() => redirectToMyProjects()}>Meus projetos</h1>
                <h1 className='title-dropdown-mobile' onClick={() => redirectToDiscovery()}>Descobrir</h1>
            </div>
            <div className='exit-content-dropdown-mobile'>
                <img className='exit-icon-dropdown-mobile' src={iconExit} alt='icone de sair'/>
                <h1 className='exit-text-dropdown-mobile' onClick={() => logout()}>Sair</h1>
            </div>
        </div>
    )
}

export default DropdownMobile;