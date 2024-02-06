import axios from 'axios'
import iconExit from '../../../../assets/img/icon-exit.png'
import './styles.css'
import { useNavigate } from 'react-router-dom'


const Dropdown = ({userInfo}) => {
    const navigate = useNavigate()
    
    const logout = async () => {
        await axios.post("http://3.239.251.235:8000/api/v1/usuarios/logout").then(() => {
            localStorage.removeItem("usersToken")
            localStorage.removeItem("usersTokenGoogle")
            navigate("/")
        })
        }
 
    return (
        <div className='dropdown'>
            <div className='info-user-dropdown'>
                <h1 className='title-dropdown'>{userInfo.first_name} {userInfo.last_name}</h1>
                <h2 className='text-dropdown'>{userInfo.email}</h2>
            </div>
            <div className='exit-content-dropdown' onClick={() => logout()}>
                <img className='exit-icon-dropdown' src={iconExit} alt='icone de sair'/>
                <h1 className='exit-title-dropdown'>Sair</h1>
            </div>
        </div>
    )
}

export default Dropdown