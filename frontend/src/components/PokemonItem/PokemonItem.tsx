import { Link } from "react-router-dom"
import "./PokemonItem.module.css"
import styles from "./PokemonItem.module.css"
export interface Pokemon {
  name: string
  id: number
  height: number
  weight: number
}

export const PokemonItemComponent = (pokemon: Pokemon) => {
  const baseUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"
  const imageUrl = baseUrl + pokemon.id + ".png"
  const imageBackUrl = baseUrl + "back/" + pokemon.id + ".png"
  const shinyUrl = baseUrl + "shiny/" + pokemon.id + ".png"
  const shinyBackUrl = baseUrl + "back/shiny/" + pokemon.id + ".png"
  const pokemonName = String(pokemon.name).charAt(0).toUpperCase() + String(pokemon.name).slice(1)
  return (
    <div className={styles.card}>
      <p className={styles.name}>{pokemonName}</p>
      <div className={styles.image}>
        <div>
          <img className={styles.pokemonImage} src={imageUrl}></img>
          <img className={styles.pokemonImage} src={imageBackUrl}></img>
        </div>
        <div>
          <img className={styles.pokemonImage} src={shinyUrl}></img>
          <img className={styles.pokemonImage} src={shinyBackUrl}></img>
        </div>
      </div>
      <div className={styles.pokemonInfoCard}>
        <p className={styles.pokemonInfo}>Number : {pokemon.id}</p>
        <p className={styles.pokemonInfo}>Weight : {pokemon.weight}</p>
        <p className={styles.pokemonInfo}>Height : {pokemon.height}</p>
      </div>
    </div>
  )
}
