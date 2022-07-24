import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import profile from '../../assets/profile.png';

function Header() {
    return (
        <div className='header'>
            <div className='search'>
                <AiOutlineSearch className='search-icon' />
                <input type='text' placeholder='Search' />
            </div>
            <div>
                teams member photos
            </div>
            <div className='profile'>
                <span>Hi Saundrya</span>
                <img src={profile} />
            </div>
        </div>
    )
}

export default Header;