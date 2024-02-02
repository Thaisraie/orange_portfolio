import { useEffect, useState } from 'react'
import ViewModal from '../../../../components/Modal/components/ViewModal'
import './styles.css'
import Project from './components/Project'
import axios from 'axios'

const GetProjects = ({userInfo}) => {
const [projects, setProjects] = useState([])
const [openViewModal, setOpenViewModal] = useState(false)
const [search, setSearch] = useState("")

const openViewModalFunction = () => {
    setOpenViewModal(true)
}

const closeViewModalFunction = () => {
    setOpenViewModal(false)
}

useEffect(() => {
    axios.get("http://3.239.251.235:8000/api/v1/portfolios/todos").then((response) => {
        setProjects(response.data)
})
},[])


    return (
        <div className='my-projects'>
            <label className='input-label'>Buscar tags</label>
            <input className='input' type='text' value={search} onChange={(e) => setSearch(e.target.value)} />
            <div className='my-projects-container'>
            {projects.length && projects.map((project) => (<Project date={project.criado_em} img={project.imagem} tag={project.tags} openViewModal={openViewModalFunction} userInfo={userInfo}/>)) 
            }
            {openViewModal === true ? <ViewModal closeModal={closeViewModalFunction} title={projects.titulo} link={projects.link} describe={projects.descricao} tags="abc" img={projects.imagem} date={projects.criado_em} userInfo={userInfo}/> : null}
            </div>
        </div>
    )
}

export default GetProjects;