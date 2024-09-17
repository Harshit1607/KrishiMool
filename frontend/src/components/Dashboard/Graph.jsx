import React from 'react'
import graphImage from '../../Assets/Frame.png'
import './Graph.css'

const Graph = () => {
  return (
    <div className='graph'>
      <div>
      <img src={graphImage} alt='graph'/>
      </div>
    </div>
  )
}

export default Graph