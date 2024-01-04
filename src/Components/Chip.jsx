import React from 'react'

const Chip = ({label}) => {
  return (
    <p className='sm:text-xs bg-gradient-to-r from-blue-900 to-blue-400 text-white p-2 m-2 rounded-[5px] w-fit transform: capitalize'>{label}</p>
  )
}

export default Chip