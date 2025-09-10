import styles from "./Home.module.css"
import { PokemonComponent } from "../../components/Pokemon"
import React, { useEffect } from "react"
import { Loader } from "../../components/Loader"

interface PokemonInfo {
  id: number
  name: string
  height: number
  weight: number
}

export const Home = () => {
  const [pokemonList, setPokemonList] = React.useState<PokemonInfo[]>([])

  const [isLoading, setIsLoading] = React.useState(true)

  const [errorMessage, setErrorMessage] = React.useState("")

  const [pageNumber, setPageNumber] = React.useState(1)

  const pageBefore = async () => await setPageNumber(pageNumber - 1)

  const pageAfter = async () => await setPageNumber(pageNumber + 1)

  const fetchPokemons = async () => {
    const pokemonData = await fetch("http://localhost:8000/pokemons?page=" + pageNumber, {
      headers: { accept: "application/json" },
    })
    const pokemonJsonData = await pokemonData.json()
    console.log(pokemonJsonData)
    await new Promise(resolve => setTimeout(resolve, 500)) // on forcer le super loader
    //throw new Error("Tout est KO") // on force l'erreur
    setPokemonList(pokemonJsonData)
    setIsLoading(false)
  }

  useEffect(() => {
    setErrorMessage("")
    setIsLoading(true)
    fetchPokemons().catch(error => {
      setIsLoading(false)
      setErrorMessage(error.message)
      console.error(error.message)
    })
  }, [pageNumber])

  return (
    <div className={styles.intro}>
      <h1>Pokedex !</h1>
      {isLoading ? (
        <Loader />
      ) : errorMessage === "" ? (
        <div>
          <div className={styles.selectors}>
            {pageNumber > 0 ? (
              <div onClick={pageBefore} className={styles.selector}>
                &lt;
              </div>
            ) : (
              <div></div>
            )}
            {pageNumber < 10 ? (
              <div onClick={pageAfter} className={styles.selector}>
                &gt;
              </div>
            ) : (
              <div></div>
            )}
          </div>
          <div className={styles.pokedex}>
            {pokemonList.map(pokemon => {
              return (
                <PokemonComponent
                  name={pokemon.name}
                  id={pokemon.id}
                  height={pokemon.height}
                  weight={pokemon.weight}
                  key={pokemon.id}
                />
              )
            })}
          </div>
        </div>
      ) : (
        <div>{errorMessage}</div>
      )}
    </div>
  )
}
