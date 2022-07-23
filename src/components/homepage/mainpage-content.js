import React from 'react'
import filterImg from '../../assets/filter.png';

function MainpageContent() {
    return (
        <div className='content'>
            <div className='content-header'>
                <p>Projects</p>
                <button className='filter_btn'><img src={filterImg} /> Filter</button>
            </div>
        </div>
    )
}

export default MainpageContent;
