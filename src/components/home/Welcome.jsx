import React from 'react'
import { Carousel, Typography, Button } from "@material-tailwind/react";

const images = [
    {
        src:"/sliderimg1.jpg",
        header:"The Beauty of Nature",
        content:`It is not so much for its beauty that the forest makes a claim
        upon men&apos;s hearts, as for that subtle something, that quality
        of air that emanation from old trees, that so wonderfully changes
        and renews a weary spirit.`
    },
    {
        src:"/sliderimg2.jpg",
        header:"The Beauty of Nature",
        content:`It is not so much for its beauty that the forest makes a claim
        upon men&apos;s hearts, as for that subtle something, that quality
        of air that emanation from old trees, that so wonderfully changes
        and renews a weary spirit.`
    },
    {
        src:"/sliderimg3.jpg",
        header:"The Beauty of Nature",
        content:`It is not so much for its beauty that the forest makes a claim
        upon men&apos;s hearts, as for that subtle something, that quality
        of air that emanation from old trees, that so wonderfully changes
        and renews a weary spirit.`
    }
];


function Welcome() {

    return (

        <Carousel autoplay className="rounded-xl">
            {images.map((image,key) => (
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
                    className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                  >
                    {image.header}
                  </Typography>
                  <Typography
                    variant="lead"
                    color="white"
                    className="mb-12 opacity-80"
                  >
                    {image.content}
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

        </Carousel>
      );
  
}

export default Welcome