import { useAnimate } from "../../components/Animate"
import styles from "../../components/Animate/Animate.module.css"
import React from "react"

export const Logo = () => {
  const ref = React.useRef<HTMLDivElement>(null)
  useAnimate(ref, styles.wobbleAnimation)
  return (
    <div ref={ref}>
      <img
        height={40}
        src="https://fontmeme.com/permalink/190314/03655fc9c0c5ef371245622978eaa0a7.png"
        alt="pokemon-go-font"
      />
    </div>
  )
}
