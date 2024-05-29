import React from 'react'
import { Link } from 'react-router-dom'
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import DataObjectIcon from '@mui/icons-material/DataObject';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
const Menu = () => {
    return (
        <div className='menu bg-darkaccentbg flex flex-col my-3 p-5 items-center xs:h-[97%] sm:h-auto md:h-[97%] lg:rounded-2xl rounded-md'>
            <div className='text-darktext border-b-2 py-10 border-darkcirclebg w-full h-[25%]'>
                <div className='flex flex-row items-center justify-center'>
                    <div className='lg:w-[90px] lg:h-[90px] md:w-[100px] md:h-[100px] w-[60px] h-[60px] rounded-full bg-darkcirclebg'>
                        <img src={require('../Menu/3d-illustration-person-with-sunglasses_23-2149436188.avif')} alt="" srcset="" className='rounded-full' />
                    </div>
                    <div className='pl-4 my-auto text-3xl lg:text-base sm:text-lg xs:text-base md:text-2xl'>Hello, Sankalp</div>
                </div>
            </div>
            <div className='flex flex-col justify-center items-center border-b-2 border-darkcirclebg w-full h-[60%]'>

                <Link to={"/"} className='text-darktext my-4 flex items-center md:text-2xl lg:text-base'>
                    {/* <div className='flex items-center'> */}
                    <div className='p-1 mr-2 bg-darkdashboardaccent rounded-md'>
                        <SpaceDashboardIcon fontSize='medium' />
                    </div>
                    Dashboard
                    {/* </div> */}
                </Link>
                <Link to={"/problemsolving"} className='text-darktext my-4 flex items-center md:text-2xl lg:text-base'>
                    <div className='p-1 mr-2 bg-darkleetcodeaccentt rounded-md'>
                        <DataObjectIcon fontSize='medium' />
                    </div>
                    LeetCoding</Link>
                <Link to={"/jobapplications"} className='text-darktext my-4 flex items-center md:text-2xl lg:text-base'>
                    <div className='p-1 mr-2 bg-darkapplicationaccentt rounded-md'>
                        <AppRegistrationIcon fontSize='medium' />
                    </div>
                    Application</Link>
                <Link to={"/networking"} className='text-darktext my-4 flex items-center md:text-2xl lg:text-base'>
                    <div className='p-1 mr-2 bg-darknetworkingaccentt rounded-md'>
                        <LinkedInIcon fontSize='medium' />
                    </div>
                    Networking</Link>
                {/* <Link to={"/"} className='text-darktext my-4'>Dashboard</Link> */}
            </div>
            <div className='h-[20%] justify-center items-center flex sm:mt-6 mt-0'>
                <div className='rounded-md text-darktext p-3 border-2 border-darkcirclebg md:text-2xl lg:text-base'>
                    Sign Out
                </div>
            </div>
        </div>
    )
}

export default Menu
