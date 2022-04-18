import React from 'react'
import { Link } from 'react-router-dom'

export default function Heading() {
  return (
    <div className='container padding-top'>
      <h1>Filmcollection</h1> 
      <img className='star-wars-img' src='pngs/star-wars.png' alt='Star Wars Logo'/>
      <h4>All the info you want about the Star Wars films</h4>
      <Link className='laser-link' to={"/films"}>Show all Star Wars films</Link>
    </div>
  )
}
