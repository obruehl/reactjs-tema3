import React from 'react'
import PilasConvencionales from './Pilas'
import BateriasLitio from './Baterias'
import Hidrogeno from './Pure/Hidrogeno'
import BitCoin from './Bitcoin'

export default function Articulo() {
  return (
    <div>
        <PilasConvencionales />
        <BateriasLitio />
        <Hidrogeno />
        <BitCoin />
    </div>
  )
}
