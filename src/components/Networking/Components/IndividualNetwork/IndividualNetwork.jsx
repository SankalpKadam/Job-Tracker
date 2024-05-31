import React, { useRef, useState } from 'react'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const IndividualNetwork = () => {
    //Changing the job status
    const [networkSource, setNetworkSource] = useState('LinkedIn');
    // Showing or hiding drop down menu
    const ref = useRef()
    function toggleDropDown() {
        ref.current.classList.toggle('hidden')
    }
    return (
        <div className='bg-darkaccentbg
                    w-full
                    rounded-md
                    px-2
                    grid
                    grid-cols-7
                    text-darktext
                    py-3
                    mb-1'>
            <div className='border-r-2
                            border-darkcirclebg
                            text-center
                            col-span-1
                            md:text-xl
                            text-xs
                            '>
                Google
            </div>
            <div className='border-r-2
                            border-darkcirclebg
                            text-center
                            md:col-span-2
                            col-span-2
                            md:text-xl
                            text-xs
                            '>
                Nagashekar Ananda
            </div>
            <div className='md:col-span-2
            col-span-2
                            text-darktext
                            text-center
                            border-r-2
                            border-darkcirclebg
                            md:text-xl
                            text-xs'>
                Software Engineer 1
            </div>
            <div className='
                            col-span-2'>
                <div className='w-[70%]
                                bg-darkapplicationaccent
                                text-center
                                m-auto
                                rounded-md
                                md:text-xl
                                text-xs
                                cursor-pointer'
                    onClick={() => {
                        toggleDropDown()
                    }}
                >
                    {networkSource} <ArrowDropDownIcon fontSize='small' />
                </div>
                <div className='rounded-md
                                md:p-2
                                mt-2
                                md:ml-10
                                hidden
                                absolute
                                bg-darkaccentbg
                                md:w-[300px]
                                cursor-pointer
                                '
                    ref={ref}>
                    <p className='md:text-xl
                                text-xs' onClick={()=>{
                        setNetworkSource('LinkedIn')
                        toggleDropDown()
                    }}>LinkedIn</p>
                    <p className='md:text-xl
                                text-xs' onClick={()=>{
                        setNetworkSource('Cold Email')
                        toggleDropDown()
                    }}>Cold Email</p>
                    
                </div>
            </div>
        </div>
    )
}

export default IndividualNetwork
