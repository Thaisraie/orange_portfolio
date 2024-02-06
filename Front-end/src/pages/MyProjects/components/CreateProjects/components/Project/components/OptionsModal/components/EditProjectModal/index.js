import {useState } from 'react'
import ViewModal from '../../../../../../../../../../components/ViewModal'
import './styles.css'
import axios from 'axios'

const EditProjectModal = ({closeModal, img, title, describe, link, tag, findId, id, openEditSuccessModal, userInfo}) => {

const [openViewModal, setOpenViewModal] = useState(false)
const [value, setValue] = useState({
    title: title,
    link: link,
    describe: describe,
    tags: tag,
})
const [date, setDate] = useState(null)

const handleChange = (e) => {
    setValue({
        ...value,
        [e.target.name]:e.target.value
    })
}

const openViewModalFunction = () => {
    if(value.title || value.tags || value.link || value.describe) {
    setOpenViewModal(true)
    setDate(new Date())
   }
}

const closeViewModalFunction = () => {
    setOpenViewModal(false)
   }
  
const savePost = async () => {
    if(value.title || value.tags || value.link || value.describe) {
    findId(id) 
    const formData = new FormData();
    formData.append('titulo', value.title);
    formData.append('link', value.link);
    formData.append('descricao', value.describe);
    formData.append('tags', value.tags);

    await axios.patch(`http://3.239.251.235:8000/api/v1/portfolios/${id}`, formData).then(() => {
    openEditSuccessModal()
    closeModal()
})
}
}
    return (
        <div className="background" >
            <div className='modal-container'>
                <h1 className='title-modal'>Editar projeto</h1>
                <div className='column-container'>
                <div className='first-column'>
                <p className='subtitle-modal'>Selecione o conteúdo que você deseja fazer upload</p>
                <img className='img-file-edit' alt='Imagem do Projeto' src={img}/>
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
                <div>
                <button className='primary-button' onClick={() => savePost()}>Salvar</button>
                <button onClick={() => closeModal()} className='second-button'>Cancelar</button>
                </div>
                </div>
            </div>
            {openViewModal === true ? <ViewModal closeModal={closeViewModalFunction} title={value.title} link={value.link} describe={value.describe} tags={value.tags} img={img} date={date} userInfo={userInfo}/> : null}
        </div>
    )
}

export default EditProjectModal;