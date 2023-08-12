import React from 'react'
import github from '../images/github.png';

export default function Footer() {
  return (
    <div>
      <footer className='footer wrapper'>
        <h1>Reading Matters</h1>
        <h2>Copyright 2023<span> IshitaRaina. </span>All rights reserved.</h2>
        <img className='img-fluid' src={github} alt="Github" />
      </footer>
    </div>
  )
}
