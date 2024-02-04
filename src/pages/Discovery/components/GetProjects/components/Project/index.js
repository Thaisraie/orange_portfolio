
import "./styles.css"

const Project = ({date, id, img, tag, openViewModal, userInfo, findId, usuarioID}) => {

const tags = tag.split(" ")
const formatDate = new Date(date).toLocaleDateString('pt-BR', {day:"numeric", month:"numeric"})

const openViewModalFunction = (id, usuarioID) => {
    findId(id, usuarioID)
    openViewModal()
}

    return (
        <div className='project-container'>
            <div className='project-img-container' onClick={() => openViewModalFunction(id, usuarioID)}>
                <img className='project-img' src={img} alt='imagem do projeto' />
            </div>
            <div className='project-infos'>         
            <div className='project-user-infos'>       
                <h1 className='project-name'>{formatDate}</h1>    
            </div>
            <div className='project-info-tags'>
                {tags.length <= 2 ? tags.map((tag) => 
                    <p className='tags'>{tag}</p>
                    ) : <>
                    <p className='tags'>{tags[0]}</p>
                    <p className='tags'>{tags[1]}</p>   
                    <p className='tags'>...</p>  
                    </>                    
                }
                </div>
            </div>
            </div>
    )
}

export default Project;