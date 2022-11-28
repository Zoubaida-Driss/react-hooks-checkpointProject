import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
<ul>
  <Link style={{all:"unset" , cursor:"pointer"}} to="/"><li>Home</li></Link>  
    
</ul>

    </div>
  )
}

export default Navbar