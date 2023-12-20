import PropTypes from 'prop-types'
//import { useState } from 'react'
import { Waypoint } from 'react-waypoint'

function Car({ img, sound, decade, name, desc, hp, acc, top }) {
   //const [infoActive, setInfoActive] = useState(false)
   //const [specsActive, setSpecsActive] = useState(false)

   function handleInfoEnter() {
      var audio = document.getElementById(decade)
      audio.play()
      //setInfoActive(true)
   }

   function handleInfoLeave() {
      var audio = document.getElementById(decade)
      audio.pause()
      //setInfoActive(false)
   }

   /*
   function handleSpecsEnter() {
      setSpecsActive(true)
   }

   function handleSpecsLeave() {
      setSpecsActive(false)
   }
   */

   return (
      <section
         className='h-screen w-screen bg-contain bg-fixed bg-center bg-no-repeat sm:h-[200vh] lg:bg-cover'
         style={{
            backgroundImage: 'url(' + img + ')',
         }}
      >
         <Waypoint
            onEnter={handleInfoEnter}
            onLeave={handleInfoLeave}
            topOffset={'-140%'}
            bottomOffset={'50%'}
         />
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
