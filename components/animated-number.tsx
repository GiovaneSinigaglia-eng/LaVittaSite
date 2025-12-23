"use client"

import {
  animate,
  useInView,
  useMotionValue,
  useMotionValueEvent,
  useTransform,
} from "framer-motion"
import { useEffect, useRef, useState } from "react"

interface AnimatedNumberProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> {
  value: number
  suffix?: string
  decimalPlaces?: number
  duration?: number
}

export function AnimatedNumber({
  value,
  suffix = "",
  decimalPlaces = 0,
  duration = 1.5,
  ...props
}: AnimatedNumberProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 }) // Anima uma vez quando 50% visível

  const motionValue = useMotionValue(0)
  const formattedValue = useTransform(motionValue, (latest) =>
    Intl.NumberFormat("pt-BR", {
      minimumFractionDigits: decimalPlaces,
      maximumFractionDigits: decimalPlaces,
    }).format(latest),
  )

  // Estado para armazenar o valor formatado atual para renderização
  const [displayValue, setDisplayValue] = useState(formattedValue.get())

  useEffect(() => {
    if (isInView) {
      animate(motionValue, value, { duration: duration, ease: "easeOut" })
    }
  }, [isInView, motionValue, value, duration])

  // Atualiza o estado local sempre que formattedValue muda
  useMotionValueEvent(formattedValue, "change", (latestValue) => {
    setDisplayValue(latestValue)
  })

  return (
    <span ref={ref} {...props}>
      {displayValue}
      {suffix}
    </span>
  )
}
