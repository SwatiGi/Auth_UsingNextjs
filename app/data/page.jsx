import Link from 'next/link'
import React from 'react'

const Data = () => {
  return (
      <div>
          <h1 className='text-4xl text-pink-600 text-center' >DAta</h1>
          <Link href='/data/login'>Go to login</Link>
      </div>
  )
}

export default Data