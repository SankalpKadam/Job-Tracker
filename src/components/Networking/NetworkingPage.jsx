import React, { useState } from 'react'
import Navbar from '../UniversalComponents/Navbar/Navbar'
import NetworkingList from './Components/NetworkingList'

const NetworkingPage = () => {
    //Manipulating the filter
    const [filter, setFilter] = useState('all')

    return (
        <div className='bg-darkbg 
                        lg:flex 
                        lg:flex-row 
                        flex 
                        flex-col 
                        h-[98.5%]'>
            <div className='grow-[0.05]'>
                <Navbar />
            </div>
            <div className='md:ml-8
                            ml-1
                            flex 
                            flex-col 
                            items-center 
                            justify-center
                            grow-[0.9]'>
                <div className='text-darktext 
                                grow-[[0.05]] 
                                border-b-2 
                                pb-3 
                                mb-6
                                w-full 
                                border-darkcirclebg 
                                lg:text-3xl
                                font-semibold'>
                    Networking
                </div>
                <div className='w-full
                flex
                flex-row
                flex-wrap
                justify-between'>
                    <div className='flex
                                flex-row
                                text-darktext
                                bg-darkaccentbg
                                md:w-[450px]
                                w-full
                                my-4
                                rounded-3xl
                                justify-start
                                items-center
                                cursor-pointer
                                '>
                        <div className={`border-r-2 
                                        border-darkcirclebg 
                                        transition
                                        delay-150
                                        rounded-3xl
                                        text-base
                                        xs:text-xs
                                        sm:text-xs 
                                        p-2 
                                        md:w-[150px]
                                        w-1/5 
                                        text-center 
                                        ${filter == "all" ? "bg-darktext text-darkbg " : ''}`}
                            onClick={() => setFilter('all')}
                        >
                            All
                        </div>
                        <div className={`p-2
                                        border-r-2 
                                        border-darkcirclebg 
                                        md:w-[150px]
                                        w-1/5 
                                        text-center
                                        text-base
                                        xs:text-xs
                                        sm:text-xs 
                                        transition
                                        delay-150
                                        rounded-3xl
                                        ${filter == "linkedin" ? "bg-darktext text-darkbg" : ""}`}
                            onClick={() => setFilter('linkedin')}>
                            LinkedIn
                        </div>
                        <div className={`p-2
                                        md:w-[150px]
                                        w-1/5 
                                        text-center
                                        text-base
                                        xs:text-xs
                                        sm:text-xs 
                                        transition
                                        delay-150
                                        rounded-3xl
                                        ${filter == "email list" ? "bg-darktext text-darkbg" : ""}`}
                            onClick={() => setFilter('email list')}>
                            Email List
                        </div>
                    </div>
                    <div className='md:w-1/2 
                                    w-full
                                    my-4
                                    md:flex
                                    md:flex-row
                                    md:justify-end
                                    '>
                        <input type="text"
                            name="searchbar"
                            id="searchbar"
                            placeholder='Search'
                            className='p-2
                                          rounded-xl
                                          px-4
                                          bg-darkaccentbg
                                          text-darktext'/>
                    </div>
                </div>
                <NetworkingList/>
            </div>
        </div>
    )
}

export default NetworkingPage
