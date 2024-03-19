import React from 'react';
import mainapresentation from '../images/mainapresentation.svg';
import home1 from '../images/home1.svg'
import home2 from '../images/home2.svg'
import home3 from '../images/home3.svg'
import home4 from '../images/home4.svg'
import home5 from '../images/home5.svg'
import home6 from '../images/home6.svg'
import google from '../images/google.png'
import react from '../images/react.png'
import tailwind from '../images/tailwind.png'
import firebase from '../images/firebase.png'
import {Link} from "react-router-dom";

export default function Homepage1() {
  console.log('homepage')
  return (
    <div className='homepage'>
      <div className="homepage1">
        <div className="maintext">
          <h1>Find the <span className='text-lightblue'>books</span> you are looking for anywhere</h1>
          <p>Search for books anywhere, you don't need to know the name of the book, if you know the name of the author or the publisher, just type and search.</p>
          <Link
            to='/login'
            className="rounded-md bg-darkblue px-8 py-2.5 button text-white shadow-sm hover:bg-lightblue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >LogIn <span>&#8594;</span> </Link>
        </div>
        <img src={mainapresentation} alt="presentation" />
      </div>
      <div className="homepage2">
      <h1 className='text-center text-customblack text-3xl m-8 font-thin'>THE IMPORTANCE OF READING BOOKS</h1>
      <div className="vocabulary section flex">
        <div className="text"> 
        <h2>READING PRACTICE IMPROVES VOCABULARY</h2>
        <p className='mt-3'>Whether for pleasure, study or information, reading practice improves vocabulary and streamlines reasoning and interpretation.</p>
        </div>
        <img src={home1} alt="boy-reading" />
        </div>
        <div className="texhnology section flex"> 
        <img src={home2} alt="girl-sitting" />
        <div className="text text-right"> 
        <h2>ADVANCING TECHNOLOGY</h2>
        <p className='mt-3'>With the advancement of technologies in the modern world, people are less and less interested in reading.</p>
        </div>
        </div>
        <div className="dynamic section flex">
        <div className="text"> 
        <h2>DYNAMIC READING</h2>
        <p className='mt-3'>Dynamic and relaxed reading is one of the best ways to acquire information. The ideal is to learn to read informative texts, scientific articles, textbooks, educational books, etc.</p>
        </div>
        <img src={home3} alt="girl-on-books" />
        </div>
      </div>
      <div className="homepage3">
        <h1>ALL THE BOOKS YOU LOOK FOR IN ONE PLACE</h1>
        <img src={home4} alt="desktop" />
      </div>
      <div className="homepage4">
        <div className="download">
          <img src={home5} alt="boy-reading" />
          <p>Add books to your favorite or read-list to read them later </p>
        </div>
        <div className="buybooks">
        <img src={home6} alt="girl-standing" />
        <p>Buy the books you're looking for from your phone or PC</p>
        </div>
      </div>
      <div className="technologies">
        <h1 className='text-center text-3xl font-thin'>THE TECHNOLOGIES USED</h1>
        <div className="img-container">
        <img src={react} alt="react" />
        <img src={tailwind} alt="tailwind" />
        <img src={google} alt="google" />
        <img src={firebase} alt="firebase" />
        </div>
      </div>
    </div>
  )
}
