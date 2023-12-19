import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

function BrandItem({ id, color, logo, path }) {
   return (
      <Link
         to={path}
         className='saturate-75 group flex aspect-square w-1/2 items-center justify-center brightness-50 transition-[filter] duration-300 hover:filter-none sm:w-1/3'
         style={{ backgroundColor: color }}
      >
         <img
            className={`transition-[transform] duration-300 group-hover:scale-110 ${
               id == 5 ? 'w-2/4' : id == 6 ? 'w-1/3' : 'w-1/4'
            }`}
            src={logo}
         />
      </Link>
   )
}

BrandItem.propTypes = {
   id: PropTypes.number,
   color: PropTypes.string,
   logo: PropTypes.string,
   path: PropTypes.string,
}

export default BrandItem
