import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'

function Car({ img, sound, decade, name, desc }) {
   const [threshold, setThreshold] = useState(0.2)

   const [audioRef, audioInView] = useInView({
      threshold: threshold,
   })
   const [infoRef, infoInView] = useInView({
      triggerOnce: true,
   })
   const [specsRef, specsInView] = useInView({
      triggerOnce: true,
   })

   useEffect(function () {
      function handleResize() {
         if (window.innerWidth >= 640) {
            setThreshold(0.4)
         } else {
            setThreshold(0.6)
         }
      }

      window.addEventListener('resize', handleResize)

      handleResize()

      return function () {
         window.removeEventListener('resize', handleResize)
      }
   }, [])

   useEffect(
      function () {
         //var audio = document.getElementById(decade)

         if (audioInView) {
            //console.log(decade + ' audio in view')
            //audio.play()
         } else {
            //console.log(decade + ' audio out of view')
            //audio.pause()
         }
      },
      [audioInView, decade],
   )

   useEffect(
      function () {
         if (infoInView) {
            console.log(decade + ' info in view')
         } else {
            console.log(decade + ' info out of view')
         }
      },
      [infoInView, decade],
   )

   useEffect(
      function () {
         if (specsInView) {
            //console.log(decade + ' specs in view')
         } else {
            //console.log(decade + ' specs out of view')
         }
      },
      [specsInView],
   )

   return (
      <section
         className='h-screen w-screen bg-contain bg-fixed bg-center bg-no-repeat sm:h-[200vh] lg:bg-cover flex justify-center'
         style={{
            backgroundImage: 'url(' + img + ')',
         }}
         ref={audioRef}
      >
         <div
            className={`mt-[20%] bg-[rgba(0,0,0,0.5)] h-fit px-14 py-4 rounded-xl text-center text-white transition-opacity duration-1000 [&>*]:mb-4 ${
               infoInView ? 'opacity-100' : 'opacity-0'
            }`}
            ref={infoRef}
         >
            <h2 className='text-2xl'>{decade}</h2>
            <h1 className='text-3xl'>{name}</h1>
            <p className='text-xl'>{desc}</p>
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
}

export default Car
