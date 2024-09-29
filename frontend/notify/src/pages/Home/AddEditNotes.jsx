import React, { useState } from 'react'
import './addeditcard.css'
import TagInput from '../../components/Input/TagInput'
const AddEditNotes = ({ noteData, type, onClose }) => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [tags, setTags] = useState([])

  const [error, setError] = useState(null)
  const addNewNote = async() => {}


  const editNote = async() => {}
  const handleAddNote = () => {
    if (!title) {
      setError('Please enter a title')
      return;
    }
    if (!content) {
      setError('Please enter a content')
      return;
    }

    setError("")
    if(type === "edit") {
      editNote()
    }
    else{
      addNewNote()
    }
  };

  return (
    <div className=''>
      <div className='edit-card-title'>
        <label className='title'>Title</label>
        <input
          type='text'
          className='title-placeholder-text-edit-card'
          placeholder='Go to gym at 5'
          value={title}
          onChange={({ target }) => setTitle(target.value)}
        />
      </div>


      <div className='edit-card-content'>
        <label className='content'>Content</label>
        <textarea className='content-placeholder-text-edit-card'
          placeholder='content'
          rows={10}
          value={content}
          onChange={({ target }) => setContent(target.value)}
        />
      </div>

      <div className='edit-card-tags'>
        <label className='tags'>Tags</label>
        <TagInput className='tag-input' tags={tags} setTags={setTags} />
      </div>


      {error && <p className='error-message'>{error}</p>}

      <div className='add-close-btn-container'>
        <button className='edit-card-btn' onClick={handleAddNote}>
          ADD
        </button>
        <div className='close-btn-container'>
          <button className='close-btn' onClick={onClose}>
            CLOSE
          </button>
        </div>
      </div>


    </div>

  )
}

export default AddEditNotes