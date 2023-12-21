import { useEffect } from 'react'
import PropTypes from 'prop-types'
import BrandItem from '../components/BrandItem.jsx'

function Home({ data }) {
   useEffect(function () {
      var root = document.querySelector(':root')
      root.style.setProperty('--scrollbar-color', 'rgb(175, 175, 175)')
      document.title = 'Motopedia - Home'
      var icon = document.querySelector('link[rel="icon"]')
      var newIcon = document.createElement('link')
      newIcon.rel = 'icon'
      //ta bort /src för prodd
      newIcon.href = './src/assets/favicon.ico'
      document.head.removeChild(icon)
      document.head.appendChild(newIcon)
   })

   return (
      <div className='absolute flex min-h-screen w-screen flex-row flex-wrap'>
         {data.map(function (item) {
            return (
               <BrandItem
                  key={item.id}
                  id={item.id}
                  name={item.name}
                  color={item.color}
                  logo={item.assets.logo}
                  path={'/' + item.name}
               />
            )
         })}
      </div>
   )
}

Home.propTypes = {
   data: PropTypes.arrayOf(Object),
}

export default Home
