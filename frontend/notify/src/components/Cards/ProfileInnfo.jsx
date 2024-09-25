import React from 'react'
import './profileinnfo.css'
import { getIntials } from '../../utils/helper'
const ProfileInnfo = ({onLogout}) => {
  return (
   <div className='profile-container'>
        <div className='profile-icon-holder'>
            {getIntials("Shahid Afridi")}
        </div>

        <div>
            <p> </p>
            <button onClick={onLogout} className='logout-btn'>
                Logout
            </button>
        </div>
   </div>
  )
}

export default ProfileInnfo