import React from 'react';

const BookTable = ({ books = [], onDelete, onEdit }) => (

  <table className="book-table">
    <thead>
      <tr>
        <th>Book ID</th>
        <th>Title</th>
        <th>Ahthor</th>
        <th>Description</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {books.length > 0 ? (
        books.map((book) => (
          <tr key={book._id}>
            <td>{book._id}</td>
            <td>{book.title}</td>
            <td>{book.author}</td>
            <td>{book.description}</td>
            <td>
              <button onClick={() => onEdit(book)}>Edit</button>
              <button onClick={() => onDelete(book._id)}>Delete</button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan="5">No books available</td>
        </tr>
      )}
    </tbody>
  </table>
);

export default BookTable;

