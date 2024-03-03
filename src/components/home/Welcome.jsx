import React from "react";
import { Carousel, Typography, Button } from "@material-tailwind/react";
import Addplace from "../../pages/addplace";

const images = [
  {
    src: "/sliderimg1.jpg",
    header: "Venue Booking and Event Decoration  Platform",
    content: "Welcome to our Event Decoration and Venue Booking Platform!",
  },
  {
    src: "/sliderimg2.jpg",
    header: "Looking to host events?",
    content:
      "our platform offers a seamless experience for both event organizers and venue owners.",
  },
  {
    src: "/sliderimg3.jpg",
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

  const openAddPlace = () => {
    return(
      <Addplace />
    )
  }

  return (
    <>
    {role == "buyer" && <Carousel autoplay className="rounded-xl">
      {images.map((image, key) => (
        // <>
        <div key={key} className="relative h-full w-full">
          <img
            src={image.src}
            alt="image 1"
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
                  onClick={openAddPlace}
                >
                  Select Place
                </button>
              </Typography>
            </div>
          </div>
          {/* </> */}

          {/* <div className="relative h-full w-full">
            <img
              src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
              alt="image 2"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
              <div className="w-3/4 text-center md:w-2/4">
                <Typography
                  variant="h1"
                  color="white"
                  className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                >
                  The Beauty of Nature
                </Typography>
                <Typography
                  variant="lead"
                  color="white"
                  className="mb-12 opacity-80"
                >
                  It is not so much for its beauty that the forest makes a claim
                  upon men&apos;s hearts, as for that subtle something, that quality
                  of air that emanation from old trees, that so wonderfully changes
                  and renews a weary spirit.
                </Typography>
                
              </div>
            </div>
          </div>
          <div className="relative h-full w-full">
            <img
              src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
              alt="image 3"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
              <div className="w-3/4 text-center md:w-2/4">
                <Typography
                  variant="h1"
                  color="white"
                  className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                >
                  The Beauty of Nature
                </Typography>
                <Typography
                  variant="lead"
                  color="white"
                  className="mb-12 opacity-80"
                >
                  It is not so much for its beauty that the forest makes a claim
                  upon men&apos;s hearts, as for that subtle something, that quality
                  of air that emanation from old trees, that so wonderfully changes
                  and renews a weary spirit.
                </Typography>
                
              </div>
            </div>
          </div> */}
        </div>
      ))}
    </Carousel>}
    {role == "owner" && <Carousel autoplay className="rounded-xl">
      {images.map((image, key) => (
        // <>
        <div key={key} className="relative h-full w-full">
          <img
            src={image.src}
            alt="image 1"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/50">
            {/* <div className="w-3/4 text-center md:w-2/4">
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
                >
                  Select Place
                </button>
              </Typography>
            </div> */}
          </div>
          {/* </> */}

          {/* <div className="relative h-full w-full">
            <img
              src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
              alt="image 2"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
              <div className="w-3/4 text-center md:w-2/4">
                <Typography
                  variant="h1"
                  color="white"
                  className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                >
                  The Beauty of Nature
                </Typography>
                <Typography
                  variant="lead"
                  color="white"
                  className="mb-12 opacity-80"
                >
                  It is not so much for its beauty that the forest makes a claim
                  upon men&apos;s hearts, as for that subtle something, that quality
                  of air that emanation from old trees, that so wonderfully changes
                  and renews a weary spirit.
                </Typography>
                
              </div>
            </div>
          </div>
          <div className="relative h-full w-full">
            <img
              src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
              alt="image 3"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
              <div className="w-3/4 text-center md:w-2/4">
                <Typography
                  variant="h1"
                  color="white"
                  className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                >
                  The Beauty of Nature
                </Typography>
                <Typography
                  variant="lead"
                  color="white"
                  className="mb-12 opacity-80"
                >
                  It is not so much for its beauty that the forest makes a claim
                  upon men&apos;s hearts, as for that subtle something, that quality
                  of air that emanation from old trees, that so wonderfully changes
                  and renews a weary spirit.
                </Typography>
                
              </div>
            </div>
          </div> */}
        </div>
      ))}
    </Carousel>}
    </>
  );
}

export default Welcome;
