import { useState } from "react";
import ConfirmDeleteModal from "../../../../../../../../components/ConfirmDeleteModal/index.";
import "./styles.css"

const OptionsModal = ({id, findId, closeModal, openDeleteModal, closeDeleteModal}) => {
const [openConfirmDeleteModal, setOpenConfirmDeleteModal] = useState(false)

const openConfirmDeleteModalFunction = () => {
    setOpenConfirmDeleteModal(true)
}

const closeConfirmDeleteModalFunction = () => {
    setOpenConfirmDeleteModal(false)
    closeModal()
}

    return (
        <>
        <div className="triangle"></div>
        <div className="options-modal-container">
            <div className="options-modal-row">
            <p className="options-modal-text">Editar</p>
            </div>
            <div className="options-modal-row" onClick={() => openConfirmDeleteModalFunction()} >
            <p className="options-modal-text">Excluir</p>
            </div>
            </div>
            {openConfirmDeleteModal === true ? <ConfirmDeleteModal closeModal={closeConfirmDeleteModalFunction} findId={findId} id={id} openDeleteModal={openDeleteModal} closeDeleteModal={closeDeleteModal} /> : null}
        </>
    )
}

export default OptionsModal;