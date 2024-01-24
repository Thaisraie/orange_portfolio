import iconProfileLarge from '../../assets/img/icon-profile-large.png'
import './styles.css'

const Profile = () => {
    return (
        <div className='profile'>
            <img className='icon-profile' src={iconProfileLarge} alt="ícone do perfil"/>
            <div>
            <h1 className='profile-title'>Thais Siqueira</h1>
            <h2 className='profile-subtitle'>Brasil</h2>
            <button className='button'>Adicionar Projeto</button>
            </div>
        </div>
    )
}

export default Profile 