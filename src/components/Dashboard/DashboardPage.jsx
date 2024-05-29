import React, { useRef, useState } from 'react'
import Navbar from '../UniversalComponents/Navbar/Navbar'
import Cards from './DashboardComponents/Graph/Cards/Cards';
import DataVisualization from './DashboardComponents/Graph/DataVisualization/DataVisualization';
const DashboardPage = () => {

    //Manipulating button background and color
    const [active, setActive] = useState('graph');

    


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
            <div className='md:ml-8
                            ml-1
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
                <div className='w-full'>

                    <div className='flex
                                flex-row
                                text-darktext
                                bg-darkaccentbg
                                w-[200px]
                                my-4
                                rounded-3xl
                                justify-start
                                items-center
                                '>
                        <div className={`border-r-2 
                                        border-darkcirclebg 
                                        transition
                                        delay-150
                                        rounded-3xl
                                        p-2 
                                        w-[100px] 
                                        text-center 
                                        ${active == "flow" ? "" : "bg-darktext text-darkbg "}`}
                            onClick={() => setActive('graph')}
                        >
                            Graph
                        </div>
                        <div className={`p-2 
                                        w-[100px] 
                                        text-center
                                        transition
                                        delay-150
                                        rounded-3xl
                                        ${active == "flow" ? "bg-darktext text-darkbg" : ""}`}
                            onClick={() => setActive('flow')}>
                            Flow
                        </div>
                    </div>
                </div>
                <Cards/>
                <DataVisualization/>
            </div>
        </div>
    )
}

export default DashboardPage
