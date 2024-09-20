import React, { useState } from 'react'
import './navbar.css'
import ProfileInnfo from '../Cards/ProfileInnfo'
import { useNavigate } from 'react-router-dom'
import SearchBar from '../SearchBar/SearchBar'
const navigate = useNavigate
function Navbar() {
  const [searchQuery, setSearchQuery] = useState("");
  const onLogout = () => {
    navigate("/login");
  };
  const handleSearch = (e) => {
    
  }

  const onClearSearch = () =>{
    setSearchQuery("");
  }

  return (
    <div className= 'navbar'>   
        <h2 className='navbar-h2'>Notify</h2>

        <SearchBar value={searchQuery}
        onChange={({target})=>{
          setSearchQuery(target.value);
        }}
        handleSearch={handleSearch}
        onClearSearch={onClearSearch}
        />



        <ProfileInnfo onLogout={onLogout}/>
    </div>
  )
}

export default Navbar