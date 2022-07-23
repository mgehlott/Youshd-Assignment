import React from 'react'
import Mainpage from './main';
import Sidebar from './sidebar';

function Home() {
    return (
        <main className='home'>
            <Sidebar />
            <Mainpage />
        </main>
    )
}

export default Home;
