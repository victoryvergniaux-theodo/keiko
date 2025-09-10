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

  const fetchPokemons = async () => {
    const pokemonData = await fetch("http://localhost:8000/pokemons", { headers: { accept: "application/json" } })
    const pokemonJsonData = await pokemonData.json()
    await new Promise(resolve => setTimeout(resolve, 2000)) // on forcer le super loader
    //throw new Error("Tout est KO") // on force l'erreur
    setPokemonList(pokemonJsonData)
    setIsLoading(false)
  }

  useEffect(() => {
    setErrorMessage("")
    fetchPokemons().catch(error => {
      setIsLoading(false)
      setErrorMessage(error.message)
      console.error(error.message)
    })
  }, [])

  return (
    <div className={styles.intro}>
      <h1>Pokedex !</h1>
      {isLoading ? (
        <Loader />
      ) : errorMessage === "" ? (
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
      ) : (
        <div>{errorMessage}</div>
      )}
    </div>
  )
}
