import React from 'react'

function footer() {
  return (
    <div className='m-3 md:m-5 lg:m-10 grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 mx-10 border-black border-t-2 pt-3'>
        <div className='text-md md:text-xl lg:text-2xl flex justify-center items-center'>Connect with us</div>
        <div className='text-lg flex flex-col justify-center items-center'>
            <p className='uppercase font-bold	'>main office</p>
            <div className='flex flex-col justify-center items-center'>
                <p>123-k, Sector-28</p>
                <p>Green City,</p>
                <p>Gandhinagar</p>
                <p>Gujarat</p>
            </div>
        </div>
        <div className='text-lg flex flex-col justify-center items-center'>
        <p className='uppercase font-bold	'>social media</p>
            <div className='flex flex-col justify-center items-center'>
                <p>Facebook</p>
                <p>Instagram</p>
                <p>Twitter</p>
            </div>
        </div>
    </div>
  )
}

export default footer
