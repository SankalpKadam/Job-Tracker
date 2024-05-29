import React from 'react'
import Navbar from '../UniversalComponents/Navbar/Navbar'

const LeetcodingPage = () => {
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
                    Problem Solving 
                </div>
            </div>
        </div>
    )
}

export default LeetcodingPage
