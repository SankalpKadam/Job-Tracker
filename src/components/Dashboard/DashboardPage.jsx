import React, { useState } from 'react'
import Menu from '../UniversalComponents/Menu/Menu'
import MenuIcon from '@mui/icons-material/Menu';
const DashboardPage = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    return (
        <div className='dashboardpage bg-darkbg lg:flex lg:flex-row flex flex-col h-full'>
            <div className='text-darktext bg-darkaccentbg flex flex-row justify-between items-center p-3 lg:hidden'>
                <div className='md:text-2xl'>Job Tracker</div>
                <MenuIcon fontSize='large' onClick={()=>{
                    menuOpen?setMenuOpen(false):setMenuOpen(true)
                }}/>
            </div>
            <div className={`grow-0.3 lg:ml-3 rounded-md h-full lg:translate-y-0 transition ease-in-out delay-150 ${menuOpen?'translate-y-[-1%]':'xs:translate-y-[-120%] sm:translate-y-[-150%]'}`}>
                <Menu />
            </div>
            <div className='grow-0.7 bg-grey text-white'>
                hello
            </div>
        </div>
    )
}

export default DashboardPage
