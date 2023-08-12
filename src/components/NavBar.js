import React from 'react';
import {Link} from "react-router-dom";

export default function NavBar() {
  return (
    <div>
      <nav className='navbar wrapper'>
        <Link to="/"><h1>Reading Matters</h1></Link>
        <div>
        <a href=''><span>About</span></a>
        <a href='https://github.com/ishitaraina1807' target="_blank"><span>Contact</span></a>
        </div>
      </nav>
    </div>
  )
}
