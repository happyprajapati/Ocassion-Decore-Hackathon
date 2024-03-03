import React from "react";
import { Carousel, Typography, Button } from "@material-tailwind/react";
import SelectDialog from "./selectDialog";

const images = [
  {
    src: "/Venue-Vista/sliderimg1.jpg",
    header: "Venue Booking and Event Decoration  Platform",
    content: "Welcome to our Event Decoration and Venue Booking Platform!",
  },
  {
    src: "/Venue-Vista/sliderimg2.jpg",
    header: "Looking to host events?",
    content:
      "our platform offers a seamless experience for both event organizers and venue owners.",
  },
  {
    src: "/Venue-Vista/sliderimg3.jpg",
    header: "wide range of venues",
    content:
      "Our platform offers a wide range of venues including halls, banquet rooms, gardens, and more.",
  },
];

function Welcome() {

  const [role, setRole] = React.useState("");
  
  React.useEffect(()=>{
    if(localStorage.getItem("role"))
      setRole(localStorage.getItem("role"));
  },[])

  
  const [open, setOpen] = React.useState(false);
 
  const handleOpen = () => setOpen(!open);


  return (
    <>
    {role == "buyer" || role == "" && <Carousel autoplay className="rounded-xl">
      {images.map((image, key) => (
        <div key={key} className="relative h-full w-full">
          <img
            src={image.src}
            alt="Slider image"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
            <div className="w-3/4 text-center md:w-2/4">
              <Typography
                variant="h1"
                color="white"
                className="mb-4 text-3xl md:text-5xl lg:text-6xl font-alice"
              >
                {image.header}
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="mb-12 opacity-80 text-md md:text-2xl lg:text-3xl font-cardo"
              >
                {image.content}
              </Typography>
              <Typography>
                <button
                  className="w-fit px-5 flex\ justify-center px-3 py-1 bg-[#a855f7] text-white rounded-md hover:shadow-xl"
                  onClick={handleOpen}
                >
                  Select Place
                </button>
              </Typography>
              <SelectDialog open={open} handleOpen={handleOpen} />
            </div>
          </div>
        </div>
      ))}
    </Carousel>}
    {role == "owner" && <Carousel autoplay className="rounded-xl">
      {images.map((image, key) => (
        <div key={key} className="relative h-full w-full">
          <img
            src={image.src}
            alt="Slider image"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/50">
          </div>
        </div>
      ))}
    </Carousel>}
    </>
  );
}

export default Welcome;
