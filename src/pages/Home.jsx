import BrandItem from '../components/home/BrandItem.jsx'
import Ferrari from '../assets/ferrari/logo.png'
import Porsche from '../assets/porsche/logo.png'
import Lamborghini from '../assets/lamborghini/logo.png'
import Volvo from '../assets/volvo/logo.png'
import McLaren from '../assets/mclaren/logo.png'
import Renault from '../assets/renault/logo.png'

const brandItems = [
   {
      id: 1,
      name: 'Ferrari',
      color: '#EF1A2D',
      logo: Ferrari,
      path: '/Ferrari',
   },
   {
      id: 2,
      name: 'Porsche',
      color: '#E0DBD1',
      logo: Porsche,
      path: '/Porsche',
   },
   {
      id: 3,
      name: 'Lamborghini',
      color: '#040404',
      logo: Lamborghini,
      path: 'Lamborghini',
   },
   {
      id: 4,
      name: 'Volvo',
      color: '#182871',
      logo: Volvo,
      path: 'Volvo',
   },
   {
      id: 5,
      name: 'McLaren',
      color: '#FF8700',
      logo: McLaren,
      path: 'McLaren',
   },
   {
      id: 6,
      name: 'Renault',
      color: '#FFC128',
      logo: Renault,
      path: 'Renault',
   },
]

function Home() {
   return (
      <div className='absolute flex min-h-screen w-screen flex-col flex-wrap sm:flex-row'>
         {brandItems.map((item) => (
            <BrandItem
               key={item.id}
               id={item.id}
               name={item.name}
               color={item.color}
               logo={item.logo}
               path={item.path}
            />
         ))}
      </div>
   )
}

export default Home
