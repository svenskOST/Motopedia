import PropTypes from 'prop-types'
import { useState } from 'react'
import { Waypoint } from 'react-waypoint'

function Car({ img, sound, decade, name, desc, hp, acc, top }) {
   const [infoActive, setInfoActive] = useState(false)
   const [specsActive, setSpecsActive] = useState(false)

   function handleInfoEnter() {
      //var audio = document.getElementById(decade)
      //audio.play()
      setInfoActive(true)
   }

   function handleInfoLeave() {
      //var audio = document.getElementById(decade)
      //audio.pause()
      setInfoActive(false)
   }

   function handleSpecsEnter() {
      setSpecsActive(true)
   }

   function handleSpecsLeave() {
      setSpecsActive(false)
   }

   return (
      <section
         className='flex h-screen w-screen justify-center bg-contain bg-fixed bg-center bg-no-repeat sm:bg-cover'
         style={{
            backgroundImage: 'url(' + img + ')',
         }}
      >
         <Waypoint
            onEnter={handleInfoEnter}
            onLeave={handleInfoLeave}
            topOffset={'30%'}
            bottomOffset={'30%'}
         />
         <Waypoint
            onEnter={handleSpecsEnter}
            onLeave={handleSpecsLeave}
            topOffset={'30%'}
            bottomOffset={'30%'}
         />
         <div
            className={`mt-16 text-center text-white transition-opacity duration-1000 [&>*]:mb-4 ${
               infoActive ? 'opacity-100' : 'opacity-0'
            }`}
         >
            <h2 className='text-2xl'>{decade}</h2>
            <h1 className='text-3xl'>{name}</h1>
            <p className='text-xl'>{desc}</p>
         </div>
         <div
            className={`bottom-0 absolute flex justify-between w-1/2 transition-opacity duration-1000 ${
               specsActive ? 'opacity-100' : 'opacity-0'
            }`}
         >
            <div>{hp}</div>
            <div>{acc}</div>
            <div>{top}</div>
         </div>
         <audio id={decade} src={sound}></audio>
      </section>
   )
}

Car.propTypes = {
   img: PropTypes.string,
   sound: PropTypes.string,
   decade: PropTypes.number,
   name: PropTypes.string,
   desc: PropTypes.string,
   hp: PropTypes.number,
   acc: PropTypes.number,
   top: PropTypes.number,
}

export default Car
