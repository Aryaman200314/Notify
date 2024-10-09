import React, { useState } from 'react'
import './navbar.css'
import ProfileInnfo from '../Cards/ProfileInnfo'
import { useNavigate } from 'react-router-dom'
import SearchBar from '../SearchBar/SearchBar'

function Navbar({ userInfo, onSearchNote, handleClearSearch }) {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const onLogout = () => {
    console.log("logging out");
    localStorage.clear();
    navigate("/login");
  };
  const handleSearch = (e) => {
    if(searchQuery) {
      onSearchNote(searchQuery);
    }
  }

  const onClearSearch = () =>{
    setSearchQuery("");
    handleClearSearch()
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



        <ProfileInnfo userInfo={userInfo} onLogout={onLogout}/>
    </div>
  )
}

export default Navbar