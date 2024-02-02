import { useEffect, useState } from 'react'
import ViewModal from '../../../../components/Modal/components/ViewModal'
import './styles.css'
import Project from './components/Project'
import axios from 'axios'

const GetProjects = ({userInfo}) => {
const [projects, setProjects] = useState([])
const [openViewModal, setOpenViewModal] = useState(false)
const [search, setSearch] = useState("")
const [projectId, setProjectId] = useState([])

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
    axios.get("http://3.239.251.235:8000/api/v1/portfolios/todos").then((response) => {
        setProjects(response.data)
})
},[])

const findAllUsersProjects = projects.find((b) => b.usuarioID !== userInfo.id)
const allUsersProjects = new Array(findAllUsersProjects)

const sortProjects = projects.length && allUsersProjects.sort((a, b) => {
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
            <label className='input-label'>Buscar tags</label>
            <input className='input' type='text' value={search} onChange={(e) => setSearch(e.target.value)} />
            <div className='my-projects-container'>
            {projects.length ? searchProjects.map((project) => (<Project date={project.criado_em} id={project.id} img={project.imagem} tag={project.tags} openViewModal={openViewModalFunction} userInfo={userInfo} findId={findId}/>)): null}
            {openViewModal === true ? <ViewModal closeModal={closeViewModalFunction} title={projectId.titulo} link={projectId.link} describe={projectId.descricao} tags={projectId.tags} img={projectId.imagem} date={projectId.criado_em} userInfo={userInfo}/> : null}
            </div>
        </div>
    )
}

export default GetProjects;