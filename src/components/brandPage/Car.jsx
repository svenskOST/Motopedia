import PropTypes from 'prop-types'

function Car({ decade, name, brand, desc, top, hp, acc }) {
   function playAudio() {
      var audio = document.getElementById(decade)
      audio.play()
   }

   return (
      <section
         className='flex h-screen w-screen justify-center bg-cover bg-fixed bg-center bg-no-repeat'
         style={{
            backgroundImage:
               'url(src/assets/' + brand.toLowerCase() + '/images/' + decade + '.jpg',
         }}
         onClick={playAudio}
      >
         <div className='mt-16 text-center text-white [&>*]:mb-4'>
            <h2 className='text-2xl'>{decade}</h2>
            <h1 className='text-3xl'>{name}</h1>
            <p className='text-xl'>{desc}</p>
         </div>
         <audio id={decade} src={'src/assets/' + brand.toLowerCase() + '/sounds/' + decade + '.mp3'}></audio>
      </section>
   )
}

Car.propTypes = {
   decade: PropTypes.string,
   name: PropTypes.string,
   brand: PropTypes.string,
   desc: PropTypes.string,
   top: PropTypes.number,
   hp: PropTypes.number,
   acc: PropTypes.number,
}

export default Car
