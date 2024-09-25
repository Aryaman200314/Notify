import React from 'react'
import './addeditcard.css'
import TagInput from '../../components/Input/TagInput'
const AddEditNotes = () => {
  return (
    <div>
        <div className='edit-card-title'>
            <label className=''>Title</label>
            <input
                type='text'
                className='title-placeholder-text-edit-card'
                placeholder='Go to gym at 5'
                />
        </div>


        <div className='edit-card-content'>
            <label className=''>Content</label>
            <textarea className='content-placeholder-text-edit-card' 
            placeholder='content'
            rows={10}
            />
        </div>

        <div className='edit-card-tags'>
            <label className=''>Tags</label>
            <TagInput/>
        </div>

        <button className='edit-card-btn' onClick={() => {}}>ADD</button>
    </div>
  )
}

export default AddEditNotes