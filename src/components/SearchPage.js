import React, { useState } from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import searchiconsvg from '../images/searchiconsvg.png';
import search from '../images/search.svg';
import { Link } from "react-router-dom";

export default function SearchPage() {
  const location = useLocation();
  const name = location.state?.name || "User";
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    navigate(`/search-result?query=${encodeURIComponent(searchQuery)}`);
  };

  return (
    <div className='searchpage'>
      <div className="search-section">
        <div>
          <div className="mt-0 border-t border-gray-100">
            <dl className="divide-y divide-gray-100">
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-2xl leading-6 text-customblack font-thin">Heyyy {name}!</dt>
                <dd className="mt-2 text-sm sm:col-span-2 sm:mt-0">
                  <ul role="list" className="divide-y divide-darkblue rounded-md border border-darkblue">
                    <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                      <div className="flex w-0 flex-1 items-center">
                        <div className="ml-4 flex min-w-0 flex-1 gap-2">
                          <span className="truncate font-medium">Your Favorite Books</span>
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
                          <span className="truncate font-medium">Your Reading List</span>
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

        </div>
        <p className='text-customblack font-light'>You don't need to know the name of the book, if you know the name of the author or publisher, just type, search and find</p>
      </div>
      <div className="search">
        <input
          id="search"
          name="search"
          type="text"
          value={searchQuery}
          onChange={event => setSearchQuery(event.target.value)}
          required
          className="min-w-0 flex-auto rounded-md border-0 bg-white mr-3 px-8 py-2 text-customblack shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-darkblue sm:text-lg sm:leading-6"
          placeholder="Type author, book name..."
        />
        <button
          type="submit"
          onClick={handleSearch}
          className="rounded-md bg-white px-3.5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-lightblue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
        >
          <img src={searchiconsvg} alt="search" />
        </button>
      </div>
      <div className="flex justify-center mt-20">
        <img src={search} alt="books" />
      </div>
    </div>
  )
}
