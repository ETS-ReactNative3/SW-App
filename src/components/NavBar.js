import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <nav>
      <div>
      <Link to={"/"}>Homebase</Link>
        <Link to={"/films"}>Film Collection</Link>
      </div>
      <div>
        <Link to={"/films"}>Login</Link>
        <Link to={"/films"}>Sign Up</Link>
      </div>
    </nav>
  )
}
