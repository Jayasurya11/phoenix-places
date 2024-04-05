import React from 'react'

const HomePage = () => {
  return (
    <>
    <p className='font-bold text-xl px-4 lg:px-12 my-4'>Home Page</p>
    <div className='grid grid-cols-1 gap-4 px-2 lg:px-12 my-4'>
        <img src="/images/pic1.jpg" className='w-screen max-h-[600px]'/>
        <img src="/images/main1.jpg" className='w-screen max-h-[600px]'/>
        <img src="/images/pic2.jpg" className='w-screen max-h-[600px]'/>
        <img src="/images/pic3.jpg" className='w-screen max-h-[600px]'/>
        

    </div>
    </>
  )
}

export default HomePage