import {useState } from 'react'
import ViewModal from './components/ViewModal'
import IconImg from '../../assets/img/icon-img.png'
import './styles.css'

const Modal = ({closeModal}) => {

const [fileImg, setFileImg] = useState(null)
const [openViewModal, setOpenViewModal] = useState(false)

const handleFileImg = (e) => {
    if(e.target.files) {
        setFileImg(URL.createObjectURL(e.target.files[0]));
    }
}

const openViewModalFunction = () => {
    setOpenViewModal(true)
}

const closeViewModalFunction = () => {
    setOpenViewModal(false)
}


    return (
        <div className="background" >
            <div className='modal-container'>
                <h1 className='title-modal'>Adicionar projeto</h1>
                <div className='column-container'>
                <div className='first-column'>
                <p className='subtitle-modal'>Selecione o conteúdo que você deseja fazer upload</p>
                <label for='arquivo'>
                {fileImg ? <img className='img-file' alt='Imagem do Projeto' src={fileImg}/> : 
                <div className='box-img-container'>                
                <img src={IconImg} alt='ícone de arquivo'/>
                <div className='text-container'>
                <p className='box-text'>Compartilhe seu talento com milhares de pessoas</p>
                </div>               
                </div> 
                }
                </label>
                <input type='file' name='arquivo' id='arquivo' accept='image/*' onChange={handleFileImg} />
                </div>
                <div className='second-column' >
                <input className='input-modal' type='text' placeholder='Título'/>
                <input className='input-modal' type='text' placeholder='Tags'/>
                <input className='input-modal' type='text' placeholder='Link'/>
                <textarea className='textarea' placeholder='Descrição'/>
                </div>
                </div>
                <div className='button-container' >
                <p className='view-text' onClick={() => {openViewModalFunction()}} >Visualizar publicação</p>
                <button className='primary-button'>Salvar</button>
                <button onClick={() => closeModal()} className='second-button'>Cancelar</button>
                </div>
            </div>
            {openViewModal === true ? <ViewModal closeModal={closeViewModalFunction}/> : null}
        </div>
    )
}

export default Modal;