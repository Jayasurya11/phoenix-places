import React from 'react'

const People = () => {
    const l=[2,4,5,6,7,8,9,10,11,12,13,14]
  return (
    <div className='px-2 lg:px-12'>
        <p className='text-2xl font-bold my-4'>Our People</p>
        <div className='flex justify-center flex-col items-center'><p className='font-bold text-2xl my-2'>Managing Director</p><img src="/images/peoples/people1.jpg" className='w-[300px] h-[400px]'/><p className='font-bold text-lg'>J. John Kennedy</p></div>
        {l.map((item)=><img src={`/images/peoples/people${item}.jpg`} className='w-screen my-4 max-h-[800px]'/>)}
    </div>
  )
}

export default People