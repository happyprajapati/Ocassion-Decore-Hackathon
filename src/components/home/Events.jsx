import React from 'react'
import EventSwiper from './EventSwiper'

function Events() {
  return (
    <div className='m-10 flex flex-col justify-center items-center'>
      <p className="mb-10 text-3xl md:text-4xl lg:text-5xl">
        Events
      </p>
      <EventSwiper />
    </div>
  )
}

export default Events
