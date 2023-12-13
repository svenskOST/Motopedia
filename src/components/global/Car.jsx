import PropTypes from 'prop-types'

function Car({ decade, name, img, desc, top, hp, acc }) {
   return (
      <section className={`bg-[${img}] w-screen h-screen bg-center bg-cover bg-no-repeat`}>
      </section>
   )
}

Car.propTypes = {
   decade: PropTypes.string,
   name: PropTypes.string,
   img: PropTypes.string,
   desc: PropTypes.string,
   top: PropTypes.number,
   hp: PropTypes.number,
   acc: PropTypes.number,
}

export default Car
