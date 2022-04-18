import React, { useEffect, useState } from 'react'
import NavBar from '../components/NavBar'
import Heading from '../components/Heading'

export default function StartPage() {
 
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 992;

  const updateWidth = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  if (width < breakpoint) {
    return (
      <React.Fragment>
        <div className='container-animation'>
          <img className='flying-around-animation img-animated' src='/pngs/pink-laser.png' alt='pink Laser'/>
        </div>
        <div className='container-animation'>
          <img className='flying-around-animation-green img-animated-green' src='/pngs/laser-blue.webp' alt='green Laser'/>
        </div>
        <div className='bg'>
        <NavBar />
        <Heading />
        </div>
      </React.Fragment>
    )
  }
  return (
    <div className='bg'>
      <NavBar />
      <Heading />
    </div>
  )
}
