import React, { useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import './home.css'
import Notecard from '../../components/Cards/Notecard'
import {MdAdd} from 'react-icons/md'
import AddEditNotes from './AddEditNotes'
import Modal from 'react-modal'
function Home() {
  const [openAddEditModal, setOpenAddEditModal] = useState({
    isShown: false,
    type: 'add',
    data: null,
  });
  return (
    <>

      <Navbar />
      <div className='note-card-container'>
        <div className='note-cards'>
        <Notecard title="meating at 7PM" 
        date="3rd apritl 2024" 
        content="maeating at the important task"
        tags="#important"
        isPinned={true}
        onEdit={() => {}}
        onDelete={() => {}}
        onPinNote={() => {}}
        />
        
        </div>
      </div>

      <button className='add-new-btn-container' 
      onClick={() => 
        setOpenAddEditModal({
          isShown: true,
          type: 'add',
          data: null,
        })
      }>
        <MdAdd className='add-new-icon'/>
      </button>

    <Modal
      isOpen={openAddEditModal.isShown}
      onRequestClassClose={() => {}}
        style={{
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          },
        }}
        contentLabel=""
        className="edit-card-modal"
      >
      <AddEditNotes
      type={openAddEditModal.type}
      noteData={openAddEditModal.data}
      onClose={() => {
        setOpenAddEditModal({isShown: false, type: 'add', data: null});
      }}/>
        </Modal>
    </>


  )
}

export default Home