import React from 'react'
import AppRegistrationOutlinedIcon from '@mui/icons-material/AppRegistrationOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const CountCard = ({title="Application",count="200"}) => {
  return (
    <div className='bg-darkaccentbg w-[80%] p-4 h-[100%] rounded-2xl drop-shadow-md flex flex-col items-center justify-center'>
      <div className='flex flex-col items-center justify-center w-full'>
        <div className='text-darktext grow-[0.3]'>
            {
                title == "Application"?
                <AppRegistrationOutlinedIcon fontSize='large' className='bg-darkapplicationaccent p-1 rounded-md'/>:<LinkedInIcon fontSize="large" className='bg-darkleetcodeaccent p-1 rounded-md'/>
            }
        </div>
        <div className='text-darktext lg:text-xl border-b-2 border-darkcirclebg w-full flex items-center justify-center my-2 py-2 grow-[0.5]'>
            {title}
        </div>
        <div className='text-darktext lg:text-3xl grow-[0.2]'>
          200
        </div>
      </div>
    </div>
  )
}

export default CountCard
