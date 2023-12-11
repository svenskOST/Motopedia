import CarBrand from '../components/CarBrand.jsx'

function Home() {
   return (
      <div className='absolute flex min-h-screen w-screen flex-col flex-wrap sm:flex-row'>
         <CarBrand color={'#EF1A2D'} />
         <CarBrand color={'#FFFAD1'} />
         <CarBrand color={'#040404'} />
         <CarBrand color={'#182871'} />
      </div>
   )
}

export default Home
