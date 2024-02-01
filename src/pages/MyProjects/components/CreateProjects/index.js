import { useEffect, useState } from 'react'
import Modal from '../../../../components/Modal'
import ViewModal from '../../../../components/Modal/components/ViewModal'
import SuccessModal from '../../../../components/Modal/components/SuccessModal'
import IconImg from '../../../../assets/img/icon-img.png'
import './styles.css'
import Project from './components/Project'
import axios from 'axios'

const CreateProjects = ({userInfo}) => {
const [openModal, setOpenModal] = useState(false)
const [openSuccessModal, setOpenSuccessModal] = useState(false)
const [projects, setProjects] = useState({})
const [openViewModal, setOpenViewModal] = useState(false)
const [projectId, setProjectId] = useState({})
const [search, setSearch] = useState("")

const userId = userInfo.id


const openModalFunction = () => {
    setOpenModal(true)
}

const closeModalFunction = () => {
    setOpenModal(false)
}

const openSuccessModalFunction = () => {
    setOpenSuccessModal(true)
    setOpenModal(false)
}

const closeSuccessModalFunction = () => {
    setOpenSuccessModal(false)
}

const openViewModalFunction = () => {
    setOpenViewModal(true)
}

const closeViewModalFunction = () => {
    setOpenViewModal(false)
}

const findId = (id) => {
    setProjectId(projects.find((a) => a.id === id))
}

useEffect(() => {
    axios.get(`http://3.239.251.235:8000/api/v1/portfolios/usuario/${userId}`).then((response) => {
        setProjects(response.data)
})
},[userId])

const sortProjects = projects.length && projects.sort((a, b) => {
    if(a.criado_em > b.criado_em) {
        return -1
    }
    return null
})

const searchTags = (search) => {
    return projects.length && sortProjects.filter(project => project.tags.toLowerCase().includes(search.toLowerCase())) 
}

const searchProjects = searchTags(search)

    return (
        <div className='my-projects'>
            <h1 className='my-projects-title'>Meus projetos</h1>
            <input className='input' type='text' placeholder='Buscar tags' value={search} onChange={(e) => setSearch(e.target.value)} />
            <div className='my-projects-container'>
            {projects.length ? searchProjects.map((project) => (<Project date={project.criado_em} title={project.titulo} describe={projectId.descricao} img={project.imagem} tag={project.tags} link={projectId.link} id={project.id} findId={findId} openViewModal={openViewModalFunction} userInfo={userInfo}/>)): 
            <div className='box-img-container' onClick={() => openModalFunction()}>
                <img src={IconImg} alt='ícone de arquivo'/>
                <div className='text-container'>
                <p className='first-text'>Adicione seu primeiro projeto</p>
                <p className='second-text'>Compartilhe seu talento com milhares de pessoas</p>
                </div>  
            </div>
            }
            {openModal === true ? <Modal closeModal={closeModalFunction} openSuccessModal={openSuccessModalFunction} userInfo={userInfo}/> : null}
            {openSuccessModal === true ? <SuccessModal closeModal={closeSuccessModalFunction} /> : null}
            {openViewModal === true ? <ViewModal closeModal={closeViewModalFunction} title={projectId.titulo} link={projectId.link} describe={projectId.descricao} tags={projectId.tags} img={projectId.imagem} date={projectId.criado_em} userInfo={userInfo}/> : null}
            </div>
        </div>
    )
}

export default CreateProjects;