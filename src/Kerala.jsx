import React from 'react'

const Kerala = () => {
    const l=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
  return (
    <div className='px-2 lg:px-12'>
        <p className='text-2xl font-bold'>Kerala Meet</p>
        {l.map((item)=><img src={`/images/kerala/k${item}.jpg`} className='w-screen my-4 max-h-[500px]'/>)}
    </div>
  )
}

export default Kerala