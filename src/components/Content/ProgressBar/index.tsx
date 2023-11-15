'use client'
import Styles from './progressbar.module.scss'
import { useState, useEffect } from 'react'

type Props = {
  completed: number
}

const ProgressBar = ({ completed }: Props) => {
  const [progress, setProgress] = useState(0)

  // スムーズに動態的にProgressBarを動作させる
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress < completed ? prevProgress + 50 : completed
      )
    }, 300)

    return () => clearInterval(interval)
  }, [])

  // Simplify fraction 計算
  const simplifyFraction = (numerator: number, denominator: number): string => {
    const gcd = (a: number, b: number): number => (b === 0 ? a : gcd(b, a % b))
    const common = gcd(numerator, denominator)
    return `${numerator / common}/${denominator / common}`
  }

  const fraction: string = simplifyFraction(progress, 100)

  return (
    <div className={Styles.container}>
      <div className={Styles.innerBar}>
        <div className={Styles.filler} style={{ width: `${progress}%` }}></div>
      </div>
      <span className={Styles.label}>{`${fraction}ステップ`}</span>
    </div>
  )
}
export default ProgressBar

import React from 'react'
