import React from 'react'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
const IndividualProblem = ({
    number,
    title,
    link='',
    level,
    id
}) => {
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
                                        '>
                            {number}
                        </div>
                        <div className='border-r-2
                                        border-darkcirclebg
                                        text-center
                                        col-span-2
                                        '>
                            {title}
                        </div>
                        <div className='border-r-2
                                        border-darkcirclebg
                                        text-center
                                        flex
                                        flex-row
                                        justify-around
                                        items-center
                                        '>
                            <EditIcon />
                            <DeleteIcon />
                            <a href={link} target="_blank" rel="noopener noreferrer">

                            <OpenInNewIcon />
                            </a>
                        </div>
                        <div className='border-r-2
                                        border-darkcirclebg
                                        text-center
                                        opacity-50
                                        col-span-2
                                        '>
                            <a href="" className='bg-darkcirclebg px-2 py-1 rounded-2xl'>Tree</a>
                        </div>
                        <div className='
                                        col-span-1'>
                            <div className='w-[60%]
                                            bg-darkapplicationaccent
                                            text-center
                                            m-auto
                                            rounded-2xl'>
                                                {level}
                            </div>
                        </div>
                    </div>
  )
}

export default IndividualProblem
