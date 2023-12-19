import { Link } from 'react-router-dom'

function Navbar() {
   return (
      <nav className='fixed z-10 flex h-14 w-full flex-row items-center justify-between rounded-b-lg bg-gray-300 px-4 py-1 drop-shadow-lg md:px-14'>
         <Link
            className='flex h-full w-fit flex-row items-center transition-transform hover:scale-110 duration-300'
            to={'/'}
         >
            {/*ta bort src/ för prodd*/}
            <img
               src='src/assets/logo.png'
               className='h-full p-1 md:mr-3'
            />
            <h1 className='select-none text-lg'>Motopedia</h1>
         </Link>
         <p className='select-none'>© Alexander Marini</p>
      </nav>
   )
}

export default Navbar
