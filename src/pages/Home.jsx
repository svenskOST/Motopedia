import PropTypes from 'prop-types'
import BrandItem from '../components/home/BrandItem.jsx'
import Ferrari from '../assets/ferrari/logo.png'
import Porsche from '../assets/porsche/logo.png'
import Lamborghini from '../assets/lamborghini/logo.png'
import Volvo from '../assets/volvo/logo.png'
import McLaren from '../assets/mclaren/logo.png'
import Renault from '../assets/renault/logo.png'

const logoMap = {
   Ferrari: Ferrari,
   Porsche: Porsche,
   Lamborghini: Lamborghini,
   Volvo: Volvo,
   McLaren: McLaren,
   Renault: Renault,
}

function Home({ data }) {
   return (
      <div className='absolute flex min-h-screen w-screen flex-col flex-wrap sm:flex-row'>
         {data.map((item) => (
            <BrandItem
               key={item.id}
               id={item.id}
               name={item.name}
               color={item.color}
               logo={logoMap[item.name]}
               path={'/' + item.name}
            />
         ))}
      </div>
   )
}

Home.propTypes = {
   data: PropTypes.arrayOf(Object),
}

export default Home
