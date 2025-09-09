interface Props {
  name: string
  number: number
}

export const Pokemon = (props: Props) => {
  const url = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + props.number + ".png"
  console.log(props.name)
  return (
    <div>
      <img src={url}></img>
      <p>Name : {props.name}</p>
      <p>Number : {props.number}</p>
    </div>
  )
}
