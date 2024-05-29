import React, { useRef, useState } from 'react'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
const DataVisualization = () => {
    //Changing the graph as per selection
    const [graphDuration, setGraphDuration] = useState('weekly');
    // Showing or hiding drop down menu
    const ref = useRef()
    function toggleDropDown() {
        ref.current.classList.toggle('hidden')
    }
    return (
        <div className='grow-[0.83] 
                        mt-4 
                        w-full
                        flex
                        flex-col'>
            <div>
                <div className='bg-darkaccentbg
                                w-[110px]
                                p-2
                                rounded-3xl
                                text-darktext'
                    onClick={() => {
                        toggleDropDown()
                    }}>
                    {graphDuration} <ArrowDropDownIcon />

                </div>
                <div className='bg-darkaccentbg
                                text-darktext
                                absolute
                                w-[110px]
                                rounded-md
                                p-2
                                mt-3
                                hidden
                                '
                    ref={ref}>
                    <p onClick={() => {
                        setGraphDuration('Weekly');
                        toggleDropDown()
                    }}>Weekly</p>
                    <p onClick={() => {
                        setGraphDuration('Yearly');
                        toggleDropDown()
                    }}>Yearly</p>
                    <p onClick={() => {
                        setGraphDuration('Monthly');
                        toggleDropDown()
                    }}>Monthly</p>
                </div>
            </div>
            <div className='flex
                            md:flex-row
                            flex-col
                            w-full
                            h-full
                            mt-2
                            md:justify-between
                            min-h-[300px]'>
                <div className='grow-[0.6]
                                bg-darkaccentbg
                                rounded-2xl
                                md:w-[55%]
                                p-4
                                md:mt-0
                                mb-2
                                '>
                    hello
                </div>
                <div className='md:w-[40%]
                                bg-darkaccentbg
                                rounded-2xl
                                '>
                    hello
                </div>
            </div>
        </div>
    )
}

export default DataVisualization
