import React from 'react'
import './profileinnfo.css'
import { getIntials } from '../../utils/helper'
const ProfileInnfo = ({onLogout}) => {
  return (
   <div className='profile-container'>
        <div className='profile-icon-holder'>
            {getIntials("Aryaman sharma")}
        </div>

        <div>
            <p>Aryaman sharma</p>
            <button onClick={onLogout} className='logout-btn'>
                Logout
            </button>
        </div>
   </div>
  )
}

export default ProfileInnfo