import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <>
      <h1 className='text-blue-200 text-center'>Devs Page</h1>
      <div className='flex justify-center'>
        <ul>
          <li><Link href="/devs/1">Dev 1</Link></li>
          <li><Link href="/devs/2">Dev 2</Link></li>
          <li><Link href="/devs/3">Dev 3</Link></li>
        </ul>
      </div>
    </>
  )
}

export default page
