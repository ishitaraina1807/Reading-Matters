import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';


const BookDescriptionPage = () => {
    const location = useLocation();
    const [bookInfo, setBookInfo] = useState(null);


    useEffect(() => {
        const bookInfoQueryParam = new URLSearchParams(location.search).get('bookInfo');
        if (bookInfoQueryParam) {
            const parsedBookInfo = JSON.parse(decodeURIComponent(bookInfoQueryParam));
            setBookInfo(parsedBookInfo);
        }
    }, [location.search]);

    if (!bookInfo) {
        return <div>Loading...</div>;
    }

    const { volumeInfo } = bookInfo;

    return (
        <div className="bg-grey">
            <div className=" mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900 mb-5 sm:text-3xl">
                        {volumeInfo.title}
                    </h1>
                    <img
                        src={volumeInfo.imageLinks?.thumbnail}
                        alt={volumeInfo.title}
                        className="rounded-lg bg-gray-100 "
                    />
                    <dl className="mt-10 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-10 lg:gap-x-8">
                        <div className="border-t border-greyishblack pt-2">
                            <dd className="mt-2 text-sm text-gray-500"><b>Author: </b>{volumeInfo.authors ? volumeInfo.authors.join(', ') : 'Unknown'}</dd>
                        </div>
                        <div className="border-t border-greyishblack pt-2">
                            <dd className="mt-2 text-sm text-gray-500"><b>Publisher: </b>{volumeInfo.publisher}</dd>
                        </div>
                        <div className="border-t border-greyishblack pt-2">
                            <dd className="mt-2 text-sm text-gray-500"><b>Published Date: </b>{volumeInfo.publishedDate}</dd>
                        </div>
                        {/* <div className="border-t border-greyishblack pt<b></b>-4">
                        <dd className="mt-2 text-sm text-gray-500">Numb<b></b>er of Pages: {volumeInfo.pageCount}</dd>
                        </div> */}
                        <div className="border-t border-greyishblack pt-2">
                            <dd className="mt-2 text-sm text-gray-500"><b>Reviews:</b> {volumeInfo.ratingsCount || 0} ratings</dd>
                        </div>
                    </dl>
                </div>
                <div className="grid grid-cols-1 grid-rows-1 gap-1 sm:gap-1 lg:gap-1">
                    <h2 className="text-2xl mt-2 font-bold tracking-tight text-gray-900 sm:text-3xl">
                        Book Description
                    </h2>
                    <p className="mt-4 text-gray-500">
                        Description: {volumeInfo.description}
                    </p>
                    <div className="my-5 flex gap-x-10">
                        <a className="rounded-md bg-darkblue px-2 py-1.5 button text-white shadow-sm hover:bg-lightblue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" href={volumeInfo.previewLink} target="_blank" rel="noopener noreferrer">
                            Read Sample
                        </a>
                        <a className="rounded-md bg-darkblue px-2 py-1.5 button text-white shadow-sm hover:bg-lightblue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" href={volumeInfo.infoLink} target="_blank" rel="noopener noreferrer">
                            Buy this Book
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default BookDescriptionPage;
