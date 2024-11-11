import React from 'react'
interface propsType {
    title:string;
}

const Heading: React.FC<propsType> = ({title}) => {
  return (
    <div className='text-center text-5xl pb-8'>
      <div className='border-b-4 inline-block pb-2 text-yellow-600'>{title}</div>
    
    </div>
  )
}


export default Heading
