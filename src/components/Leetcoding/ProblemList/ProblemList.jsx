import React from 'react'
import IndividualProblem from './IndividualProblem/IndividualProblem'

const ProblemList = ({ problemlist = [] }) => {
    return (
        <div className='w-full
                        flex
                        flex-col
                        grow-[0.9]
                        '>
            {
                problemlist.map((problem, index) => <IndividualProblem number={problem.number} id={problem.id} key={index} title={problem.title} link={problem.link} level={problem.level}/>)
            }

        </div>
    )
}

export default ProblemList
