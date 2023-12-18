import data from './data.json'

async function addAssetsToData() {
   for (const brand of data) {
      //assets för dev, ta bort /assets för prodd
      const path = `./assets/${brand.name.toLowerCase()}/`

      const logo = new URL(path + 'logo.png', import.meta.url).href
      const favicon = new URL(path + 'favicon.ico', import.meta.url).href

      const images = []
      const sounds = []

      for (let i = 1950; i <= 2010; i += 10) {
         images.push(new URL(path + `images/${i}s.jpg`, import.meta.url).href)
         sounds.push(new URL(path + `sounds/${i}s.mp3`, import.meta.url).href)
      }

      brand.assets = { logo, favicon, images, sounds }
   }

   return data
}

export default addAssetsToData
