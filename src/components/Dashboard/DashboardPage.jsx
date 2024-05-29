import React from 'react'
import Navbar from '../UniversalComponents/Navbar/Navbar'
import CountCard from './DashboardComponents/CountCard'
const DashboardPage = () => {
    return (
        <div className='dashboardpage 
                        bg-darkbg 
                        lg:flex 
                        lg:flex-row 
                        flex 
                        flex-col 
                        h-[98.5%]'>
            <div className='grow-[0.05]'>

                <Navbar />
            </div>
            <div className='ml-8
                            flex 
                            flex-col 
                            items-center 
                            justify-center
                            grow-[0.9]
                            '>
                <div className='text-darktext 
                                grow-[[0.05]] 
                                border-b-2 
                                pb-3 
                                mb-6
                                w-full 
                                border-darkcirclebg 
                                lg:text-3xl
                                font-semibold'>
                    Job Search Overview
                </div>
                <div className='grow-[0.1] 
                                flex
                                md:flex-row
                                flex-col
                                flex-nowrap
                                justify-between 
                                items-center 
                                w-full
                                overflow-auto
                                '>
                    <div className='w-full
                                    h-full 
                                    m-auto
                                    lg:mt-0
                                    mt-2 
                                    items-center 
                                    flex'>

                        <CountCard title='Application' />
                    </div>
                    <div className='w-full
                                    h-full 
                                    m-auto
                                    lg:mt-0
                                    mt-2 
                                    items-center 
                                    flex'>

                        <CountCard title='Leetcode' />
                    </div>
                    <div className='w-full 
                                    h-full 
                                    m-auto
                                    lg:mt-0
                                    mt-2 
                                    items-center 
                                    flex'>

                        <CountCard title='Networking' />
                    </div>
                </div>
                <div className='grow-[0.83]'>

                </div>
            </div>
        </div>
    )
}

export default DashboardPage
