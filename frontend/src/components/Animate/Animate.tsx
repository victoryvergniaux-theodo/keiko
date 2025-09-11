import { useEffect } from "react"
import styles from "./Animate.module.css"

export function useAnimate(ref: React.RefObject<HTMLElement>, className: string): void {
  useEffect(() => {
    if (!ref.current) return

    ref.current.classList.add(className)
    console.log("ça anime un max")
    console.log(className)

    return () => {
      ref.current?.classList.remove(styles.className)
    }
  }, [])
}
