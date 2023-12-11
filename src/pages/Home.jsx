import CarBrand from '../components/CarBrand.jsx'
import FerrariLogo from '../assets/Ferrari.png'
import PorscheLogo from '../assets/Porsche.png'
import LamborghiniLogo from '../assets/Lamborghini.png'
import VolvoLogo from '../assets/Volvo.png'
import McLarenLogo from '../assets/McLaren.png'
import RenaultLogo from '../assets/Renault.png'

const brands = [
   {
      id: 1,
      name: 'Ferrari',
      color: '#EF1A2D',
      logo: FerrariLogo,
      path: '/Ferrari',
   },
   {
      id: 2,
      name: 'Porsche',
      color: '#E0DBD1',
      logo: PorscheLogo,
      path: '/Porsche',
   },
   {
      id: 3,
      name: 'Lamborghini',
      color: '#040404',
      logo: LamborghiniLogo,
      path: 'Lamborghini',
   },
   {
      id: 4,
      name: 'Volvo',
      color: '#182871',
      logo: VolvoLogo,
      path: 'Volvo',
   },
   {
      id: 5,
      name: 'McLaren',
      color: '#FF8700',
      logo: McLarenLogo,
      path: 'McLaren',
   },
   {
      id: 6,
      name: 'Renault',
      color: '#FFC128',
      logo: RenaultLogo,
      path: 'Renault',
   },
]

function Home() {
   return (
      <div className='absolute flex min-h-screen w-screen flex-col flex-wrap sm:flex-row'>
         {brands.map((brand) => (
            <CarBrand
               key={brand.id}
               id={brand.id}
               name={brand.name}
               color={brand.color}
               logo={brand.logo}
               path={brand.path}
            />
         ))}
      </div>
   )
}

export default Home
