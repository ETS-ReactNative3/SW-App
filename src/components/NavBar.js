import React from 'react'
import { Link } from 'react-router-dom'
import { FcLike } from 'react-icons/fc'

export default function NavBar() {

  return (
    <nav>
      <Link className='link' to={"/"}>Home</Link>
      <Link className='link' to={"/films"}>Collection</Link>
      <Link className='link' to={"/favs"}>
        <FcLike/>
      </Link>
    </nav>
  )
}
