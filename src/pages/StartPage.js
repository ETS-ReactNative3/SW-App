import React from 'react'
import { Link } from 'react-router-dom'

import NavBar from '../components/NavBar'
import Heading from '../components/Heading'


export default function StartPage() {
  return (
    <div>
    <NavBar />
    <Heading />
    <Link to={"/films"}>Show all Star Wars films</Link>
    </div>
  )
}
