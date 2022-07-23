import React from 'react'
import { AiOutlineMessage, AiOutlineSetting, AiOutlineLogout } from 'react-icons/ai'
import homeLogo from '../../assets/home.png';
import statLogo from '../../assets/stats.png';
import calendarLogo from '../../assets/calendar.png';
import projectLogo from '../../assets/project.png';

function Sidebar() {
    return (
        <div className='sidebar'>
            <p className='brand'>.taskez</p>

            <ul className='nav-list'>
                <li>  <button className='side-btn'>
                    <span className='nav-icon'><img src={homeLogo} alt='home' /></span> Overview</button></li>
                <li> <button className='side-btn'><span className='nav-icon'><img src={statLogo} alt='stats' /></span> Stat</button></li>
                <li >  <button className='side-btn p-btn'><span className='nav-icon'><img src={projectLogo} alt='project' /></span>Project</button></li>
                <li><button className='side-btn'><span className='nav-icon'><AiOutlineMessage /></span>Chat</button></li>
                <li><button className='side-btn'><span className='nav-icon'><img src={calendarLogo} alt='calendar' /></span>Calender</button></li>
            </ul>
            <ul className='action-list'>
                <li><button className='side-btn'> <span className='nav-icon'><AiOutlineSetting /></span>Setting</button></li>
                <li><button className='side-btn'> <span className='nav-icon'><AiOutlineLogout /></span> Log Out</button></li>
            </ul>


        </div>
    )
}

export default Sidebar
