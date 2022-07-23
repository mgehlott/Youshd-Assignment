import React from 'react'
import Header from './header';
import MainpageContent from './mainpage-content';
import TodoList from './TodoList';


function Mainpage() {
    return (
        <div className='mainpage'>
            <Header />
            <MainpageContent />
            <TodoList containerTitle='To do' />
        </div>
    )
}

export default Mainpage;
