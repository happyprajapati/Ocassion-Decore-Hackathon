import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

const events = [
  {
    src: "/swiperimg1.png",
    title: "Reception",
    add: "Ahmedabad, Gujarat",
    price: 100,
    capacity: 100,
  },
  {
    src: "/swiperimg2.png",
    title: "Wedding",
    add: "Gandhinagar, Gujarat",
    price: 100,
    capacity: 100,
  },
  {
    src: "/swiperimg3.png",
    title: "Birthday",
    add: "Vadodara, Gujarat",
    price: 100,
    capacity: 100,
  },
  {
    src: "/swiperimg4.png",
    title: "Seminar",
    add: "Jamnagar, Gujarat",
    price: 100,
    capacity: 100,
  },
];
const EventSwiper = () => {
  
  const [slide, setSlide] = React.useState(3);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () =>{
    window.innerWidth >= 960 ? setSlide(3) : null;
    window.innerWidth <= 960 && window.innerWidth >= 740 ? setSlide(2): null;
    window.innerWidth <= 740 ? setSlide(1) : null;
      });
  },[])

  return (
      // <div className="flex flex-col items-center mx-7 pb-10">
      <Swiper
        slidesPerView={slide}
        mousewheel={true}
        keyboard={true}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {events.map((event,key) => (
          <SwiperSlide key={key} className="flex flex-col justify-start gap-2 p-3 rounded-tr-4xl rounded-bl-4xl bg-cd-bg overflow-hidden">
            <img src={event.src} />
            <span className="text-xl w-full font-semibold pb-1">{event.title}</span>
            <p>{event.add}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mb-3">
            <p>Price: {event.price}</p>
            <p>Capacity: {event.capacity}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    // </div>
    // <Swiper
    //     spaceBetween={30}
    //     pagination={{
    //       clickable: true,
    //     }}
    //     modules={[Pagination]}
    //     className="mySwiper"
    //   >
    //     <SwiperSlide>Slide 1</SwiperSlide>
    //     <SwiperSlide>Slide 2</SwiperSlide>
    //     <SwiperSlide>Slide 3</SwiperSlide>
    //     <SwiperSlide>Slide 4</SwiperSlide>
    //     <SwiperSlide>Slide 5</SwiperSlide>
    //     <SwiperSlide>Slide 6</SwiperSlide>
    //     <SwiperSlide>Slide 7</SwiperSlide>
    //     <SwiperSlide>Slide 8</SwiperSlide>
    //     <SwiperSlide>Slide 9</SwiperSlide>
    //   </Swiper>
  );
};

export default EventSwiper;