const fetchFlowers = () =>
  new Promise(resolve => {
    setTimeout(() => {
      console.log("Flowers fetched !")
      resolve("Flowers !")
    }, 1000)
  })

const fetchCats = () =>
  new Promise(resolve => {
    setTimeout(() => {
      console.log("Cats fetched !")
      resolve("Cats !")
    }, 2000)
  })

const fetchDogs = () =>
  new Promise(resolve => {
    setTimeout(() => {
      console.log("Dogs fetched !")
      resolve("Dogs !")
    }, 3000)
  })

const fetch = () => {
  fetchDogs().then(() => fetchCats().then(() => fetchFlowers()))
}

const fetchAsync = async() => {
  const dogs = await fetchDogs()
  const cats = await fetchCats()
  const flowers = await fetchFlowers()
}

fetchAsync()
