import { Link } from 'react-router-dom'
import './styles.css'

const Footer = () => {
    return(
        <div className='footer'>
            <h1 className='text-footer'>Copyright © 2024 Orange Portfólio | Todos os direitos reservados
            | Feito por: 
                {' '}
                <Link className='footer-links' to="https://www.linkedin.com/in/felipe-siqueira-de-sousa-28a5951b5/" target="_blank" rel="noopener noreferrer">Felipe</Link>
                {', '}
                <Link className='footer-links' to="https://www.linkedin.com/in/iago-dos-santos-vila-real-4513aa255/" target="_blank" rel="noopener noreferrer">Iago</Link>
                {', '}
                <Link className='footer-links' to="https://www.linkedin.com/in/ianperigo" target="_blank" rel="noopener noreferrer">Ian</Link>
                {' e '}
                <Link className='footer-links' to="https://www.linkedin.com/in/thaisqusi/" target="_blank" rel="noopener noreferrer">Thais</Link>
            </h1>
           </div>
    )
}

export default Footer