import React, { useState } from 'react'
import Navbar from '../UniversalComponents/Navbar/Navbar'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import ProblemList from './ProblemList/ProblemList';
const LeetcodingPage = () => {

    //Manipulating button background and color
    const [filter, setFilter] = useState('all');

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
                <div className='w-full
                flex
                flex-row
                flex-wrap
                justify-between'>

                    <div className='flex
                                flex-row
                                text-darktext
                                bg-darkaccentbg
                                w-[400px]
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
                                        ${filter == "all" ? "bg-darktext text-darkbg " : ''}`}
                            onClick={() => setFilter('all')}
                        >
                            All
                        </div>
                        <div className={`p-2
                                        border-r-2 
                                        border-darkcirclebg 
                                        w-[100px] 
                                        text-center
                                        transition
                                        delay-150
                                        rounded-3xl
                                        ${filter == "easy" ? "bg-darktext text-darkbg" : ""}`}
                            onClick={() => setFilter('easy')}>
                            Easy
                        </div>
                        <div className={`p-2
                                        border-r-2 
                                        border-darkcirclebg
                                        w-[100px] 
                                        text-center
                                        transition
                                        delay-150
                                        rounded-3xl
                                        ${filter == "medium" ? "bg-darktext text-darkbg" : ""}`}
                            onClick={() => setFilter('medium')}>
                            Medium
                        </div>
                        <div className={`p-2 
                                        w-[100px] 
                                        text-center
                                        transition
                                        delay-150
                                        rounded-3xl
                                        ${filter == "hard" ? "bg-darktext text-darkbg" : ""}`}
                            onClick={() => setFilter('hard')}>
                            Hard
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
                            placeholder='Search for the problem'
                            className='p-2
                                          rounded-xl
                                          px-4
                                          bg-darkaccentbg
                                          text-darktext'/>
                    </div>
                </div>
                <ProblemList problemlist={[{
                    title:"Balanced Binary Tree",
                    id:"1",
                    number:"110",
                    link:"https://leetcode.com/problems/balanced-binary-tree/",
                    level:"Easy"
                }, {
                    title:"Maximum Path Sum",
                    id:"2",
                    number:"123",
                    link:"https://leetcode.com/problems/balanced-binary-tree/",
                    level:"Easy"
                },
                {
                    title:"Maximum Path Sum",
                    id:"1",
                    number:"110",
                    link:"https://leetcode.com/problems/balanced-binary-tree/",
                    level:"Easy"
                }]}/>
            </div>
        </div>
    )
}

export default LeetcodingPage
