import React from 'react'
import { NavLink } from 'react-router-dom'
import { FcLike } from 'react-icons/fc'

export default function NavBar() {

  return (
    <nav>
      <NavLink className='link' to={"/"}>Home</NavLink>
      <NavLink className='link' to={"/films"}>Collection</NavLink>
      <NavLink className='link' to={"/favs"}><FcLike/></NavLink>
    </nav>
  )
}
