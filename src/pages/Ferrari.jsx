import Car from '../components/global/Car.jsx'

const cars = [
   {
      id: 1,
      decade: '1950s',
      name: '250 Testa Rossa',
      img: 'url(src/assets/ferrari/1950s.jpg)',
      desc: 'Lorem ipsum',
      top: 350,
      hp: 530,
      acc: 5.4,
   },
   {
      id: 2,
      decade: '1960s',
      name: '250 GTO',
      img: 'url(src/assets/ferrari/1960s.jpg)',
      desc: 'Lorem ipsum',
      top: 350,
      hp: 530,
      acc: 5.4,
   },
   {
      id: 3,
      decade: '1970s',
      name: '308 GTB',
      img: 'url(src/assets/ferrari/1970s.jpg)',
      desc: 'Lorem ipsum',
      top: 350,
      hp: 530,
      acc: 5.4,
   },
   {
      id: 4,
      decade: '1980s',
      name: 'F40',
      img: 'url(src/assets/ferrari/1980s.jpg)',
      desc: 'Lorem ipsum',
      top: 350,
      hp: 530,
      acc: 5.4,
   },
   {
      id: 5,
      decade: '1990s',
      name: 'F355',
      img: 'url(src/assets/ferrari/1990s.jpg)',
      desc: 'Lorem ipsum',
      top: 350,
      hp: 530,
      acc: 5.4,
   },
   {
      id: 6,
      decade: '2000s',
      name: 'Enzo',
      img: 'url(src/assets/ferrari/2000s.jpg)',
      desc: 'Lorem ipsum',
      top: 350,
      hp: 530,
      acc: 5.4,
   },
   {
      id: 7,
      decade: '2010s',
      name: 'LaFerrari',
      img: 'url(src/assets/ferrari/2010s.jpg)',
      desc: 'Lorem ipsum',
      top: 350,
      hp: 530,
      acc: 5.4,
   },
]

function Ferrari() {
   return (
      <>
         {cars.map((car) => (
            <Car
               key={car.id}
               decade={car.decade}
               name={car.name}
               img={car.img}
               desc={car.desc}
               top={car.top}
               hp={car.hp}
               acc={car.acc}
            />
         ))}
      </>
   )
}

export default Ferrari
