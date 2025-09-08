import styles from "./Home.module.css"

export const Home = () => {
  return (
    <div className={styles.intro}>
      <div>
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png"></img>
        <p>Name : Carapuce</p>
        <p>Number : 7</p>
      </div>
    </div>
  )
}
