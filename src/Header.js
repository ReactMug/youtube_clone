import React from 'react'
import VideoCallSharpIcon from '@material-ui/icons/VideoCallSharp';
import MenuSharpIcon from '@material-ui/icons/MenuSharp';
import SearchSharpIcon from '@material-ui/icons/SearchSharp';
import AppsSharpIcon from '@material-ui/icons/AppsSharp';
import NotificationsSharpIcon from '@material-ui/icons/NotificationsSharp';
import Avatar from '@material-ui/core/Avatar';
import './Header.css'
import { useState } from 'react';
import { Link } from 'react-router-dom';
function Header() {
    const [inputSearch, setInputSearch] = useState('')



    return (
        <div className='header'>
            <div>
                <MenuSharpIcon />
                <Link to='/'>
                <img className='header__logo' alt='' src='https://logos-world.net/wp-content/uploads/2020/04/YouTube-Logo.png' >
                </img>
                </Link>

            </div>
            <div className='header__Input'>
                <input  
                onChange={e=> setInputSearch(e.target.value)} 
                value={inputSearch}
                placeholder='Search' 
                type='text'>
                </input>
                <Link to={`/Search ${inputSearch}`}>
                <SearchSharpIcon className='header__Inputicon' />
                </Link>
            </div>
            <div className='header__Icons'>
                <VideoCallSharpIcon className='header__rightIcon' />
                <AppsSharpIcon className='header__rightIcon' />
                <NotificationsSharpIcon className='header__rightIcon' />
                <Avatar 
                className='header__Avatar' 
                alt="" 
                src="https://img.freepik.com/free-photo/portrait-beautiful-young-woman-standing-grey-wall_231208-10760.jpg?size=626&ext=jpg" />
            </div>
        </div>
    )
}

export default Header
