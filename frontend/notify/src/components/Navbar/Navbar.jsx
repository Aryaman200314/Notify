import React, { useState } from 'react'
import './navbar.css'
import ProfileInnfo from '../Cards/ProfileInnfo'
import { useNavigate } from 'react-router-dom'
import SearchBar from '../SearchBar/SearchBar'
import logo from '../../assets/Images/logo.png'
function Navbar({ userInfo, onSearchNote, handleClearSearch }) {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const Logout = () => {
    console.log("logging out");
    localStorage.clear();
    navigate("/login");
  };
  const handleSearch = (e) => {
    console.log("searched")
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
        <img className='navbar-log-img' src={logo}></img>

        <SearchBar value={searchQuery}
        onChange={({target})=>{
          setSearchQuery(target.value);
        }}
        handleSearch={handleSearch}
        onClearSearch={onClearSearch}
        />



        <ProfileInnfo userInfo={userInfo} onLogout={Logout}/>
    </div>
  )
}

export default Navbar