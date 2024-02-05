import { useState } from "react";
import ConfirmDeleteModal from "./components/ConfirmDeleteModal/index.";
import EditProjectModal from "./components/EditProjectModal/index";
import "./styles.css"

const OptionsModal = ({id, findId, closeModal, openDeleteModal, closeDeleteModal, img, title, describe, link, tag, openEditSuccessModal, userInfo}) => {
const [openConfirmDeleteModal, setOpenConfirmDeleteModal] = useState(false)
const [openEditProjectModal, setOpenEditProjectModal] = useState(false)

const openConfirmDeleteModalFunction = () => {
    setOpenConfirmDeleteModal(true)
}

const closeConfirmDeleteModalFunction = () => {
    setOpenConfirmDeleteModal(false)
    closeModal()
}

const openEditProjectModalFunction = () => {
    setOpenEditProjectModal(true)
}

const closeEditProjectModalFunction = () => {
    setOpenEditProjectModal(false)
    closeModal()
}
    return (
        <>
        <div className="triangle"></div>
        <div className="options-modal-container">
            <div className="options-modal-row" onClick={() => openEditProjectModalFunction()}>
            <p className="options-modal-text">Editar</p>
            </div>
            <div className="options-modal-row" onClick={() => openConfirmDeleteModalFunction()}>
            <p className="options-modal-text">Excluir</p>
            </div>
            </div>
            {openConfirmDeleteModal === true ? <ConfirmDeleteModal closeModal={closeConfirmDeleteModalFunction} findId={findId} id={id} openDeleteModal={openDeleteModal} closeDeleteModal={closeDeleteModal} /> : null}
            {openEditProjectModal === true ? <EditProjectModal closeModal={closeEditProjectModalFunction} img={img} title={title} describe={describe} tag={tag} link={link} findId={findId} id={id} openEditSuccessModal={openEditSuccessModal} userInfo={userInfo}/> : null}
        </>
    )
}

export default OptionsModal;