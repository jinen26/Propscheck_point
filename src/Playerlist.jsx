import React from 'react'
import Playercard from './Playercard'

const Playerlist = ({players}) => {
  return (
    <div className='playerlist'>
  {players.map((player)=><Playercard player={player} />)}
  
    </div>
  )
}

export default Playerlist
