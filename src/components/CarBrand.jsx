import PropTypes from 'prop-types'

function CarBrand({ color }) {
   return (
      <div
         className='aspect-square w-screen sm:h-1/2 sm:w-1/2'
         style={{ backgroundColor: color }}
      >
         <img src='' />
      </div>
   )
}

CarBrand.propTypes = {
   color: PropTypes.string,
}

export default CarBrand
