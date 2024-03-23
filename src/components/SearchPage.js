import React, { useState } from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import searchIconSvg from '../images/searchiconsvg.png';
import search from '../images/search.svg';
import { Link } from "react-router-dom";

export default function SearchPage() {
  const location = useLocation();
  const name = location.state?.name || "User";
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    genre: '',
    publicationDate: '',
    language: '',
    ratings: ''
  });

  const handleSearch = () => {
    if (searchQuery.trim() !== "") {
      // Construct search query string with filters
      const query = new URLSearchParams({
        q: searchQuery.trim(),
        genre: filters.genre,
        publicationDate: filters.publicationDate,
        language: filters.language,
        ratings: filters.ratings
      }).toString();
      navigate(`/search-result?${query}`);
    }
  };

  return (
    <div className='search-page'>
      <div className="search-section">
        <div className="mt-0 border-t border-gray-100">
          <dl className="divide-y divide-gray-100">
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-2xl leading-6 text-customblack font-thin">Heyyy {name}!</dt>
              <dd className="mt-2 text-sm sm:col-span-2 sm:mt-0">
                <ul role="list" className="divide-y divide-darkblue rounded-md border border-darkblue">
                  <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                    <div className="flex w-0 flex-1 items-center">
                      <div className="ml-4 flex min-w-0 flex-1 gap-2">
                        <span className="truncate font-medium">Your Favorite Books - upcoming feature</span>
                      </div>
                    </div>
                    <div className="ml-4 flex-shrink-0">
                      <Link to='/favorite-books' className="font-medium text-darkblue hover:text-lightblue">
                        View
                      </Link>
                    </div>
                  </li>
                  <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                    <div className="flex w-0 flex-1 items-center">
                      <div className="ml-4 flex min-w-0 flex-1 gap-2">
                        <span className="truncate font-medium">Your Reading List - upcoming feature</span>
                      </div>
                    </div>
                    <div className="ml-4 flex-shrink-0">
                      <Link to='/reading-list' className="font-medium text-darkblue hover:text-lightblue">
                        View
                      </Link>
                    </div>
                  </li>
                </ul>
              </dd>
            </div>
          </dl>
        </div>
        <p className='text-customblack font-light'>You don't need to know the name of the book, if you know the name of the author or publisher, just type, search and find</p>
      </div>

      {/* Advanced Search Options */}
      <div className="advanced-search mt-6 px-4">
        <label htmlFor="genre" className="block text-sm font-medium text-gray-700">Genre:</label>
        <input
          id="genre"
          name="genre"
          type="text"
          value={filters.genre}
          onChange={event => setFilters({ ...filters, genre: event.target.value })}
          className="mt-1 p-1 border rounded-md w-full"
        />

        <label htmlFor="publicationDate" className="block mt-4 text-sm font-medium text-gray-700">Publication Date:</label>
        <input
          id="publicationDate"
          name="publicationDate"
          type="text"
          value={filters.publicationDate}
          onChange={event => setFilters({ ...filters, publicationDate: event.target.value })}
          className="mt-1 p-1 border rounded-md w-full"
        />

        <label htmlFor="language" className="block mt-4 text-sm font-medium text-gray-700">Language:</label>
        <input
          id="language"
          name="language"
          type="text"
          value={filters.language}
          onChange={event => setFilters({ ...filters, language: event.target.value })}
          className="mt-1 p-1 border rounded-md w-full"
        />

        <label htmlFor="ratings" className="block mt-4 text-sm font-medium text-gray-700">Ratings:</label>
        <input
          id="ratings"
          name="ratings"
          type="text"
          value={filters.ratings}
          onChange={event => setFilters({ ...filters, ratings: event.target.value })}
          className="mt-1 p-1 border rounded-md w-full"
        />
      </div>

      {/* Search Bar */}
      <div className="search mt-4 flex items-center justify-center">
        <input
          id="search"
          name="search"
          type="text"
          value={searchQuery}
          onChange={event => setSearchQuery(event.target.value)}
          className="min-w-0 flex-auto rounded-md border-0 bg-white mr-3 px-8 py-2 text-customblack shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-darkblue sm:text-lg sm:leading-6 w-3/4"
          placeholder="Type author, book name..."
          aria-label="Search"
        />
        <button
          type="submit"
          onClick={handleSearch}
          className={`rounded-md bg-white px-3.5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-lightblue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 ${searchQuery.trim() === "" ? "pointer-events-none opacity-50 cursor-not-allowed" : ""}`}
          aria-label="Submit Search"
          disabled={searchQuery.trim() === ""}
        >
          <img src={searchIconSvg} alt="search" />
        </button>
      </div>

      <div className="flex justify-center mt-8">
        <img src={search} alt="books" />
      </div>
    </div>
  );
}
