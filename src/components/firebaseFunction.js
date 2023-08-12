import { db } from './firebase';

// Function to update favorite books in Firebase
export const updateFavoriteBooks = async (userId, favoriteBooks) => {
    try {
      // Update the 'favoriteBooks' field for the user document in Firestore
      await db.collection('users').doc(userId).update({
        favoriteBooks: favoriteBooks
      });
    } catch (error) {
      console.error('Error updating favorite books:', error);
    }
  };
  
  // Function to update reading list in Firebase
  export const updateReadingList = async (userId, readingList) => {
    try {
      // Update the 'readingList' field for the user document in Firestore
      await db.collection('users').doc(userId).update({
        readingList: readingList
      });
    } catch (error) {
      console.error('Error updating reading list:', error);
    }
  };