import { useEffect, useState } from 'react'
import ViewModal from '../../../../components/ViewModal'
import './styles.css'
import Project from './components/Project'
import axios from 'axios'

const GetProjects = ({ userInfo}) => {
const [projects, setProjects] = useState([])
const [openViewModal, setOpenViewModal] = useState(false)
const [search, setSearch] = useState("")
const [projectId, setProjectId] = useState([])
const [users, setUsers] = useState([])
const [usersInfo, setUsersInfo] = useState([])

const openViewModalFunction = () => {
    setOpenViewModal(true)
}

const closeViewModalFunction = () => {
    setOpenViewModal(false)
}

const findId = (id, usuarioID) => {
    setProjectId(projects.find((a) => a.id === id))
    setUsersInfo(users.find((a) => a.id === usuarioID))
}

const allUsersProjects = []
projects.length && projects.forEach((a) => {
    if(a.usuarioID !== userInfo.id) {
        allUsersProjects.push(a)
    }
})

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

useEffect(() => {
    axios.get("http://3.239.251.235:8000/api/v1/portfolios/todos").then((response) => {
        setProjects(response.data)
    })
},[])

useEffect(() => {
    axios.get('http://3.239.251.235:8000/api/v1/usuarios/todos').then((response) => {
        setUsers(response.data)
    })
}, [])

    return (
        <div className='my-projects'>
            <label className='input-label'>Buscar tags</label>
            <input className='input' type='text' value={search} onChange={(e) => setSearch(e.target.value)} />
            <div className='my-projects-container'>
            {projects.length ? searchProjects.map((project) => (<Project key={`${project.id}-project-id`} date={project.criado_em} id={project.id} img={project.imagem} tag={project.tags} openViewModal={openViewModalFunction} findId={findId} usuarioID={project.usuarioID} users={users} />)): null}
            {openViewModal === true ? <ViewModal closeModal={closeViewModalFunction} title={projectId.titulo} link={projectId.link} describe={projectId.descricao} tags={projectId.tags} img={projectId.imagem} date={projectId.criado_em} userInfo={usersInfo}/> : null}
            </div>
        </div>
    )
}

export default GetProjects;