import React from 'react'
import { Link } from 'react-router-dom'
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import DataObjectIcon from '@mui/icons-material/DataObject';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
const Menu = () => {
    return (
        <div className='menu bg-darkaccentbg flex flex-col my-3 p-5 items-center xs:h-[97%] sm:h-auto md:h-[97%]'>
            <div className='grow-0.3 text-darktext border-b-2 py-10 border-darkcirclebg w-full h-[25%]'>
                <div className='flex flex-row items-center justify-center'>
                    <div className='lg:w-[90px] lg:h-[90px] md:w-[100px] md:h-[100px] w-[60px] h-[60px] rounded-full bg-darkcirclebg'>
                        <img src={require('../Menu/3d-illustration-person-with-sunglasses_23-2149436188.avif')} alt="" srcset="" className='rounded-full' />
                    </div>
                    <div className='pl-4 my-auto text-3xl lg:text-sm sm:text-lg'>Hello, Sankalp</div>
                </div>
            </div>
            <div className='grow-0.4 flex flex-col justify-center items-center border-b-2 border-darkcirclebg w-full h-[60%]'>

                <Link to={"/"} className='text-darktext my-4 flex items-center'>
                    {/* <div className='flex items-center'> */}
                    <div className='p-1 mr-2 bg-darkdashboardaccent rounded-md'>
                        <SpaceDashboardIcon fontSize='medium' />
                    </div>
                    Dashboard
                    {/* </div> */}
                </Link>
                <Link to={"/"} className='text-darktext my-4 flex items-center'><div className='p-1 mr-2 bg-darkleetcodeaccentt rounded-md'>
                    <DataObjectIcon fontSize='medium' />
                </div>
                    LeetCoding</Link>
                <Link to={"/"} className='text-darktext my-4 flex items-center'><div className='p-1 mr-2 bg-darkapplicationaccentt rounded-md'>
                    <AppRegistrationIcon fontSize='medium' />
                </div>
                    Application</Link>
                <Link to={"/"} className='text-darktext my-4 flex items-center'><div className='p-1 mr-2 bg-darknetworkingaccentt rounded-md'>
                    <LinkedInIcon fontSize='medium' />
                </div>
                    Networking</Link>
                {/* <Link to={"/"} className='text-darktext my-4'>Dashboard</Link> */}
            </div>
            <div className='grow-0.3 h-[20%] justify-center items-center flex'>
                <div className='rounded-md text-darktext p-3 border-2 border-darkcirclebg'>
                    Sign Out
                </div>
            </div>
        </div>
    )
}

export default Menu
