import "./Pokemon.module.css"
import styles from "./Pokemon.module.css"
export interface Pokemon {
  name: string
  id: number
  height: number
  weight: number
}

export const PokemonComponent = (pokemon: Pokemon) => {
  const url = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + pokemon.id + ".png"
  console.log(pokemon.name)
  return (
    <div className={styles.card}>
      <p>{pokemon.name}</p>
      <div className={styles.image}>
        <img className={styles.pokemonImage} src={url}></img>
      </div>
      <p>Number : {pokemon.id}</p>
      <p>Weight : {pokemon.weight}</p>
      <p>Height : {pokemon.height}</p>
    </div>
  )
}
