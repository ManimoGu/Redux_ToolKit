import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <ul>
           <Link to="/"> <li>Home</li></Link>
           <Link to="/Cards"><li>Cards</li></Link>
        </ul>
    </div>
  )
}

export default Navbar