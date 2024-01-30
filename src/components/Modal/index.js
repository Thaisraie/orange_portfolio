import {useState } from 'react'
import ViewModal from './components/ViewModal'
import IconImg from '../../assets/img/icon-img.png'
import './styles.css'
import axios from 'axios'

const Modal = ({closeModal, openSuccessModal}) => {

const [fileImg, setFileImg] = useState("")
const [openViewModal, setOpenViewModal] = useState(false)
const [value, setValue] = useState({
    title: "",
    link: "",
    describe: "",
    tags: "",
})
const [urlFileImg, setUrlFileImg] = useState("")
const [date, setDate] = useState(null)

const handleChange = (e) => {
    setValue({
        ...value,
        [e.target.name]:e.target.value
    })
}

const handleFileImg = (e) => {
    if(e.target.files) {
        setFileImg(URL.createObjectURL(e.target.files[0]));
        setUrlFileImg(e.target.files[0])
    }
}

const openViewModalFunction = () => {
    if(value.title && value.tags && value.link && value.describe) {
    setOpenViewModal(true)
    setDate(new Date())
   }
}

const closeViewModalFunction = () => {
    setOpenViewModal(false)
   }
  
const savePost = async () => {
    if(value.title && value.tags && value.link && value.describe) {
    const formData = new FormData;
    formData.append('titulo', value.title);
    formData.append('link', value.link);
    formData.append('descricao', value.describe);
    formData.append('imagem', urlFileImg);
    formData.append('usuarioID', '1'); 
    formData.append('tags', value.tags);

    await axios.post("http://3.239.251.235:8000/api/v1/portfolios/", formData).then(() => openSuccessModal())
}
}
    return (
        <div className="background" >
            <div className='modal-container'>
                <h1 className='title-modal'>Adicionar projeto</h1>
                <div className='column-container'>
                <div className='first-column'>
                <p className='subtitle-modal'>Selecione o conteúdo que você deseja fazer upload</p>
                <label for='url'>
                {fileImg ? <img className='img-file' alt='Imagem do Projeto' src={fileImg}/> : 
                <div className='modal-box-img-container'>                
                <img src={IconImg} alt='ícone de arquivo'/>
                <div className='text-container'>
                <p className='box-text'>Compartilhe seu talento com milhares de pessoas</p>
                </div>               
                </div> 
                }
                </label>
                <input type='file' name='url' id='url' accept='image/*' onChange={handleFileImg}/>
                </div>
                <div className='second-column' >
                <input className='input-modal' type='text' name='title' value={value.title} onChange={handleChange} placeholder='Título'/>
                <input className='input-modal' type='text' name='tags' value={value.tags} onChange={handleChange} placeholder='Tags'/>
                <input className='input-modal' type='text' name='link' value={value.link} onChange={handleChange} placeholder='Link'/>
                <textarea className='textarea' name='describe' value={value.describe} onChange={handleChange} placeholder='Descrição'/>
                </div>
                </div>
                <div className='button-container' >
                <p className='view-text' onClick={() => openViewModalFunction()}>Visualizar publicação</p>
                <button className='primary-button' onClick={() => savePost()}>Salvar</button>
                <button onClick={() => closeModal()} className='second-button'>Cancelar</button>
                </div>
            </div>
            {openViewModal === true ? <ViewModal closeModal={closeViewModalFunction} title={value.title} link={value.link} describe={value.describe} tags={value.tags} img={fileImg} date={date}/> : null}
        </div>
    )
}

export default Modal;