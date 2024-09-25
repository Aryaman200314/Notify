import React from 'react'
import './notecard.css'
import {MdOutlinePushPin} from 'react-icons/md'
import {MdCreate, MdDelete} from 'react-icons/md'
const Notecard = ({ 
    title,
    date,
    content,
    isPinned,
    tags,
    onEdit,
    onDelete, 
    onPinNote }) => {
    return (
        <div className='main-card'>
            <div className='card-title-data-holder'>
                <div>
                    <h6>{title}</h6>
                    <span>{date}</span>
                </div>


                <MdOutlinePushPin onClick={onPinNote} />
            
            
            </div>
            <p className=''>{content?.slice(0, 60)}</p>
            <div className='edit-delete-icon-container'>
                <div className=''>{tags}</div>
                <div className=''>
                    <MdCreate onClick={onEdit}/>
                    <MdDelete onClick={onDelete} />
                </div>
            </div>
        </div>
    )
}

export default Notecard