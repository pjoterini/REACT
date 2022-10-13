import React from 'react'

export default function PokemonList({pokemon}) {
  return (
    <div className='pokemon-list'>
        {pokemon.map(p => {
          return  <div className='pokemon-item' key={p}>{p}</div>
        })}
    </div>
  )
}
