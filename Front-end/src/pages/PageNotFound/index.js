import { Link } from 'react-router-dom';
import iconOrange from '../../assets/img/icon-orange.png';
import './styles.css';

const PageNotFound = () => {

    return (
            <div className="container-not-found">
                <div className='container-img-not-found'>
                    <p className='error-not-found'>4</p>
                    <img className="img-not-found" src={iconOrange} alt='icone de laranja'/>
                    <p className='error-not-found'>4</p>
                </div>
                <h1 className='text-not-found'>Página não encontrada</h1>
                <Link className='btn-not-found' to="/">Voltar para a página inicial</Link>
            </div>
    )
}

export default PageNotFound;

