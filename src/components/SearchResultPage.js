import React, { useState, useEffect, useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AuthContext } from './AuthProvider';
import { updateFavoriteBooks, updateReadingList } from './firebaseFunction';
import blankheart from '../images/blankheart.png';
import blackheart from '../images/blackheart.png';
import check from '../images/check.png';
import add from '../images/add.png';

const SearchResultPage = () => {
    const location = useLocation();
    const searchQuery = new URLSearchParams(location.search).get('query');
    const [searchResults, setSearchResults] = useState([]);
    const { user } = useContext(AuthContext);

  useEffect(() => {

    const fetchData = async () => {
        try {
            const apiKey = 'AIzaSyBW4pVoiDAZAHg8YwOAEXmzkF9jBmJtpZk'; 
            const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(searchQuery)}&key=${apiKey}`);
            const data = await response.json();
            setSearchResults(data.items || []);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };

    fetchData();
  }, [searchQuery]);

  const toggleFavorite = async (bookId) => {
    if (!user) {
      // User is not logged in, handle accordingly
      return;
    }

    const updatedFavorites = [...user.favoriteBooks];

    if (updatedFavorites.includes(bookId)) {
      // Book is already in favorites, remove it
      updatedFavorites.splice(updatedFavorites.indexOf(bookId), 1);
    } else {
      // Book is not in favorites, add it
      updatedFavorites.push(bookId);
    }

    // Update user's favorites in Firebase
    await updateFavoriteBooks(user.uid, updatedFavorites);
  };

  const toggleReadingList = async (bookId) => {
    if (!user) {
      // User is not logged in, handle accordingly
      return;
    }

    const updatedReadingList = [...user.readingList];

    if (updatedReadingList.includes(bookId)) {
      // Book is already in reading list, remove it
      updatedReadingList.splice(updatedReadingList.indexOf(bookId), 1);
    } else {
      // Book is not in reading list, add it
      updatedReadingList.push(bookId);
    }

    // Update user's reading list in Firebase
    await updateReadingList(user.uid, updatedReadingList);
  };

  return (
    <div>
      <div className="mx-auto max-w-2xl px-4 py-8 sm:px-6 sm:py-12 lg:max-w-7xl lg:px-8">
      <div className='mb-10 text-customblack font-semibold'>Search Results:</div>
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-6">
          {searchResults.map((book) => (
            <Link key={book.id} className="group">
              <div className="flex aspect-h-1 aspect-w-1 w-full h-full overflow-hidden rounded-lg bg-white xl:aspect-h-8 xl:aspect-w-7">
                {book.volumeInfo.imageLinks && (
                  <img
                  className="object-cover"
                    src={
                      book.volumeInfo.imageLinks.thumbnail ||
                      book.volumeInfo.imageLinks.smallThumbnail
                    }
                    alt={book.volumeInfo.title}
                  />
                )}
                <div className="book-info mx-5 my-2">
                <h1 className=" font-semibold text-xl text-customblack">
                  {book.volumeInfo.title}
                </h1>
                <p className="mt-1 text-sm font-thin text-gray-900">
                  <b>Author: </b>{book.volumeInfo.authors ? book.volumeInfo.authors.join(', ') : 'Unknown'}
                </p>
                <p className="mt-1 text-sm font-thin text-gray-900">
                  <b>Category: </b>{book.volumeInfo.categories ? book.volumeInfo.categories.join(', ') : 'Unknown'}
                </p>
                <p className="mt-1 text-sm font-thin text-gray-900">
                  <b>Published Date: </b>{book.volumeInfo.publishedDate}
                </p>
                <div className="btns flex">
                  <button
                    onClick={() => toggleFavorite(book.id)}
                  >
                    {/* Use blackheart image if book is in favorites, otherwise use blankheart */}
                    <img src={user?.favoriteBooks.includes(book.id) ? blackheart : blankheart} alt="Heart" />
                  </button>
                  <button
                    onClick={() => toggleReadingList(book.id)}
                  >
                    {/* Use check image if book is in reading list, otherwise use plus */}
                    <img src={user?.readingList.includes(book.id) ? check : add} alt="add" />
                  </button>
                </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}  

export default SearchResultPage;
