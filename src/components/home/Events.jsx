import React, { useEffect } from "react";
import EventSwiper from "./EventSwiper";

function Events() {

  return (
      <div className="m-3 md:m-5 lg:m-10 flex flex-col justify-center items-center">
        <p className="m-10 text-3xl md:text-4xl lg:text-5xl">Events</p>
        <EventSwiper />
      </div>
  );
}

export default Events;
