import { PokemonItemComponent } from "../../components/PokemonItem"
import React, { useEffect } from "react"
import { useParams } from "react-router-dom"
import styles from "../Home/Home.module.css"

export const Pokemon = () => {
  interface PokemonInfo {
    id: number
    name: string
    height: number
    weight: number
  }

  const [pokemon, setPokemon] = React.useState<PokemonInfo>()

  let params = useParams()

  const id = params.id

  const url = "http://localhost:8000/pokemon/" + id

  const fetchPokemon = async () => {
    const pokemonData = await fetch(url, { headers: { accept: "application/json" } })
    const pokemonJsonData = await pokemonData.json()
    setPokemon(pokemonJsonData)
    console.log(pokemonJsonData)
  }

  useEffect(() => {
    fetchPokemon()
  }, [])

  return (
    <div className={styles.intro}>
      {pokemon ? (
        <PokemonItemComponent name={pokemon.name} id={pokemon.id} height={pokemon.height} weight={pokemon.weight} />
      ) : (
        <div>Ce pokémon n'a pas l'air d'exister</div>
      )}
    </div>
  )
}
