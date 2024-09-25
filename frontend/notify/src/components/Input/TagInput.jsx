import React from 'react'
import { MdClose, MdAdd} from 'react-icons/md'
import './taginput.css'
function TagInput({tags, setTags}) {
  return (
    <div>
        <div className='add-tags-container'>
            <input type='text' className='input-form-tags' 
            placeholder='Add tags'/>

            <button className=''>
                <MdAdd className='tag-input-modal'/>
            </button>
        </div>
    </div>
  )
}

export default TagInput