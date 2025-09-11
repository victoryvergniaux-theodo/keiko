import { Link } from "react-router-dom"
import "./Pokemon.module.css"
import styles from "./Pokemon.module.css"
import React from "react"
import { useAnimate } from "../../components/Animate"
import animationStyles from "../../components/Animate/Animate.module.css"
export interface Pokemon {
  name: string
  id: number
  height: number
  weight: number
}

export const PokemonComponent = (pokemon: Pokemon) => {
  const ref = React.useRef<HTMLDivElement>(null)
  const imageUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + pokemon.id + ".png"
  const pokemonUrl = "/pokemon/" + pokemon.id
  useAnimate(ref, animationStyles.tadaAnimation)
  console.log(pokemon.name)
  return (
    // pas réussi à le mettre dans du css ça s'override à chaque fois, à regarder ensemble
    <Link style={{ color: "inherit", textDecoration: "inherit" }} to={pokemonUrl}>
      <div ref={ref} className={styles.card}>
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
