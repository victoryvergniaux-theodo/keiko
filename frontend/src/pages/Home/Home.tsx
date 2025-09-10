import styles from "./Home.module.css"
import { PokemonComponent } from "../../components/Pokemon"
import React, { useEffect } from "react"

interface PokemonInfo {
  id: number
  name: string
  height: number
  weight: number
}

export const Home = () => {
  const [pokemonFilterValue, setFilterValue] = React.useState("")

  const [pokemonList, setPokemonList] = React.useState<PokemonInfo[]>([])

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value)
    setFilterValue(event.target.value)
  }

  const fetchPokemons = async () => {
    const pokemonData = await fetch("http://localhost:8000/pokemons", { headers: { accept: "application/json" } })
    const pokemonJsonData = await pokemonData.json()
    setPokemonList(pokemonJsonData)
    
  }

  useEffect(() => {
    console.log("Hello World")
    fetchPokemons()
  }, [pokemonFilterValue])

  return (
    <div className={styles.intro}>
      <h1>Pokedex !</h1>
      <div className={styles.pokedex}>
      {pokemonList.map(pokemon => {
        return <PokemonComponent name={pokemon.name} id={pokemon.id}  height={pokemon.height} weight={pokemon.weight} key={pokemon.id} />
      })}
      </div>
    </div>
  )
}
