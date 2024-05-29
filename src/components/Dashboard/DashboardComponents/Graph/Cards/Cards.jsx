import React from 'react'
import CountCard from './CountCard'
const Cards = () => {
    return (
        <div className='grow-[0.1] 
                        flex
                        md:flex-row
                        flex-col
                        flex-nowrap
                        md:justify-between 
                        justify-center
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
    )
}

export default Cards
