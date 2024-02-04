import { useNavigate } from 'react-router-dom'
import iconExit from '../../../../assets/img/icon-exit.png'
import './styles.css'
import axios from 'axios'


const DropdownMobile = ({userInfo}) => {
    const navigate = useNavigate()

    const redirectToMyProjects = () => {
        navigate("/myprojects") 
    }

    const redirectToDiscovery = () => {
        navigate("/discovery")
    }

    const logout = async () => {
        await axios.post("http://3.239.251.235:8000/api/v1/usuarios/logout").then(() => {
            localStorage.removeItem("usersToken")
            localStorage.removeItem("usersTokenGoogle")
            navigate("/")
        })
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
            <div className='exit-content-dropdown-mobile' onClick={() => logout()}>
                <img className='exit-icon-dropdown-mobile' src={iconExit} alt='icone de sair'/>
                <h1 className='exit-text-dropdown-mobile'>Sair</h1>
            </div>
        </div>
    )
}

export default DropdownMobile;