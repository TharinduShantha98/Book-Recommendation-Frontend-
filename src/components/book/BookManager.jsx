import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BookForm from './BookForm';
import BookTable from './BookTable';
import BookSearch from './BookSearch';
import './Book.css';
import bookService from '../../service/bookService';

const BookManager = () => {
  const [books, setBooks] = useState([]); // All books
  const [selectedBook, setSelectedBook] = useState(null); // Book selected for editing
  const [searchResults, setSearchResults] = useState([]); // Books matching the search

  // Fetch all books
  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const booksData = await bookService.fetchBooks();
      console.log(booksData);
      setBooks(booksData);
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };

  const addBook = async (book) => {
    try {
      console.log(book)
      const newBook = await bookService.addBook(book);
      setBooks([...books, newBook]);
    } catch (error) {
      console.error('Error adding book:', error);
    }
  };

  const updateBook = async (id, updatedBook) => {
    try {
      console.log(updatedBook);
      const update  = await bookService.updateBook(id,updatedBook);
      fetchBooks(); // Refresh the book list
    } catch (error) {
      console.error('Error updating book:', error);
    }
  };

  const deleteBook = async (id) => {
    try {
      await bookService.deleteBook(id);
      setBooks(books.filter((book) => book._id !== id));
    } catch (error) {
      console.error('Error deleting book:', error);
    }
  };

  const searchBookById = async (id) => {
    try {
      console.log(id);
      const response = await bookService.searchBookById(id);
      if((await response).status === 200 ){
        console.log(response);
        setSearchResults([response.data]);
      }

      
    } catch (error) {
      console.error('Error searching book:', error);
    }
  };

  return (
    <div className="book-manager">
      <h1>Book Manager</h1>
      <BookForm
        onAddBook={addBook}
        onUpdateBook={updateBook}
        selectedBook={selectedBook}
        setSelectedBook={setSelectedBook}
      />
      <BookSearch onSearch={searchBookById} />
      <BookTable
        books={searchResults.length > 0 ? searchResults : books}
        onDelete={deleteBook}
        onEdit={setSelectedBook}
      />
    </div>
  );
};

export default BookManager;
