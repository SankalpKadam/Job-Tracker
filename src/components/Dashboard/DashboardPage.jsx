import React, { useState } from 'react'
import Navbar from '../UniversalComponents/Navbar/Navbar'
const DashboardPage = () => {
    return (
        <div className='dashboardpage bg-darkbg lg:flex lg:flex-row flex flex-col h-[98.5%]'>
            <Navbar/>
            <div className='grow-0.7 bg-grey text-white'>
                hello
            </div>
        </div>
    )
}

export default DashboardPage
