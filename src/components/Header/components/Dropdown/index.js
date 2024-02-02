import iconExit from '../../../../assets/img/icon-exit.png'
import './styles.css'


const Dropdown = ({userInfo}) => {
 
    return (
        <div className='dropdown'>
            <div className='info-user-dropdown'>
                <h1 className='title-dropdown'>{userInfo.nome} {userInfo.sobrenome}</h1>
                <h2 className='text-dropdown'>{userInfo.email}</h2>
            </div>
            <div className='exit-content-dropdown'>
                <img className='exit-icon-dropdown' src={iconExit} alt='icone de sair'/>
                <h1 className='title-dropdown'>Sair</h1>
            </div>
        </div>
    )
}

export default Dropdown