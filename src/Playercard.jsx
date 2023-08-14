import React from 'react'
import App from './App'


const Playercard = ({player}) => {
  return (
    <div className='playercard'>
    <img src= {player.img} alt=''/>
    <h1>{player.name}</h1>
    <h2>{player.nationality}</h2>
    </div>
  )
}

export default Playercard
