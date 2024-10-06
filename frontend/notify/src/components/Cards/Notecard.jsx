import React from 'react'
import './notecard.css'
import { MdOutlinePushPin, MdCreate, MdDelete } from 'react-icons/md'
import moment from 'moment'

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
                <div className='title-and-date-container'>
                    <span className='title'>{title}</span> <br/>
                    <span className='date'>{moment(date).format('Do MMM YYYY')}</span>
                </div>
                <MdOutlinePushPin className='icon' onClick={onPinNote} />
            </div>

            <p className='content'>{content?.slice(0, 60).concat('..')}</p>

            <div className='edit-delete-icon-container'>
                <div className='tags'>
                    {tags.map((item) => `#${item}  `)}
                </div>
                <div className='icon-buttons'>
                    <MdCreate className='icon' onClick={onEdit}/>
                    <MdDelete className='icon' onClick={onDelete} />
                </div>
            </div>
        </div>
    )
}

export default Notecard;






















// import React from 'react'
// import './notecard.css'
// import {MdOutlinePushPin} from 'react-icons/md'
// import {MdCreate, MdDelete} from 'react-icons/md'
// import moment from 'moment'
// const Notecard = ({ 
//     title,
//     date,
//     content,
//     isPinned,
//     tags,
//     onEdit,
//     onDelete, 
//     onPinNote }) => {
//     return (
//         <div className='main-card'>
//             <div className='card-title-data-holder'>
//                 <div className='title-and-date-container'>
//                     <span className='title'>{title}</span> <br/>
//                     <span className='date'>{moment(date).format('Do MMM YYYY')}</span>
//                 </div>


//                 <MdOutlinePushPin onClick={onPinNote} />
            
            
//             </div>
//             <p className='content'>{content?.slice(0, 60).concat('..')}</p>
//             <div className='edit-delete-icon-container'>
//                 <div className=''>{tags.map((item)=> `#${item}  `)}</div>
//                 <div className=''>
//                     <MdCreate onClick={onEdit}/>
//                     <MdDelete onClick={onDelete} />
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Notecard

