import { Link } from "react-router-dom"
import "./Pokemon.module.css"
import styles from "./Pokemon.module.css"
export interface Pokemon {
  name: string
  id: number
  height: number
  weight: number
}

export const PokemonComponent = (pokemon: Pokemon) => {
  const imageUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + pokemon.id + ".png"
  const pokemonUrl = "/pokemon/" + pokemon.id
  console.log(pokemon.name)
  return (
    // pas réussi à le mettre dans du css ça s'override à chaque fois, à regarder ensemble
    <Link style={{ color: "inherit", textDecoration: "inherit" }} to={pokemonUrl}>
      <div className={styles.card}>
        <p>{pokemon.name}</p>
        <div className={styles.image}>
          <img className={styles.pokemonImage} src={imageUrl}></img>
        </div>
        <p>Number : {pokemon.id}</p>
        <p>Weight : {pokemon.weight}</p>
        <p>Height : {pokemon.height}</p>
      </div>
    </Link>
  )
}
