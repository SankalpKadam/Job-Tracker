import React, { useRef, useState } from 'react'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

const IndividualApplication = () => {

    //Changing the job status
    const [jobStatus, setJobStatus] = useState('');
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
                        mb-1
                        '>
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
                            md:col-span-3
                            col-span-2
                            md:text-xl
                            text-xs
                            '>
                Software engineer
            </div>
            <div className='border-r-2
                            border-darkcirclebg
                            text-center
                            flex
                            flex-row
                            justify-around
                            items-center
                            hidden
                            '>
                <EditIcon />
                <DeleteIcon />
                <a href=""><OpenInNewIcon /></a>
            </div>
            <div className='md:col-span-1
            col-span-2
                            text-darktext
                            text-center
                            border-r-2
                            border-darkcirclebg
                            md:text-xl
                            text-xs'>
                07/01/2024
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
                    Applied <ArrowDropDownIcon fontSize='small' />
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
                        setJobStatus('Applied')
                        toggleDropDown()
                    }}>Applied</p>
                    <p className='md:text-xl
                                text-xs' onClick={()=>{
                        setJobStatus('Interviewing')
                        toggleDropDown()
                    }}>Interviewing</p>
                    <p className='md:text-xl
                                text-xs' onClick={()=>{
                        setJobStatus('Offer')
                        toggleDropDown()
                    }}>Offer</p>
                    <p className='md:text-xl
                                text-xs' onClick={()=>{
                        setJobStatus('Rejected')
                        toggleDropDown()
                    }}>Rejected</p>
                </div>
            </div>
        </div>
    )
}

export default IndividualApplication
