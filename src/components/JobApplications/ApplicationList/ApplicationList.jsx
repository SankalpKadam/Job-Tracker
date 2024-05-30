import React from 'react'
import IndividualApplication from './IndividualApplication/IndividualApplication'

const ApplicationList = () => {
  return (
    <div className='w-full
    flex
    flex-col
    grow-[0.9]'>
      {[1,2,3].map((index)=><IndividualApplication/>)}
    </div>
  )
}

export default ApplicationList
