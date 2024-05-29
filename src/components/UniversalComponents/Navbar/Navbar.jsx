import React, { useState } from 'react'
import Menu from './Menu/Menu';
import MenuIcon from '@mui/icons-material/Menu';
const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <div className='h-full'>
            <div className='text-darktext bg-darkaccentbg flex flex-row justify-between items-center p-3 lg:hidden'>
                <div className='md:text-2xl'>Job Tracker</div>
                <MenuIcon fontSize='large' onClick={() => {
                    menuOpen ? setMenuOpen(false) : setMenuOpen(true)
                }} />
            </div>
            <div className={`lg:ml-3 lg:relative absolute z-10 rounded-md h-full w-full lg:translate-y-0 transition ease-in-out delay-150 ${menuOpen ? 'translate-y-[-1%]' : 'xs:translate-y-[-120%] sm:translate-y-[-160%]'}`}>
                <Menu />
            </div>
        </div>
    )
}

export default Navbar
