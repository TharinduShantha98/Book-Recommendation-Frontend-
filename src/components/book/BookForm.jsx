import React, { useState, useEffect } from 'react';

const BookForm = ({ onAddBook, onUpdateBook, selectedBook, setSelectedBook }) => {
  const [formData, setFormData] = useState({ title: '', description: '', author: '' });

  useEffect(() => {
    if (selectedBook) {
      setFormData(selectedBook);
    }
  }, [selectedBook]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedBook) {
      onUpdateBook(selectedBook._id, formData);
    } else {
      onAddBook(formData);
    }
    setFormData({ title: '', description: '', author:'' });
    setSelectedBook(null);
  };

  return (
    <form onSubmit={handleSubmit} className="book-form">
      <input
        type="text"
        placeholder="Title"
        value={formData.title}
        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
        required
      />
      <input
        type="text"
        placeholder="author"
        value={formData.author}
        onChange={(e) => setFormData({ ...formData, author: e.target.value })}
        required
      />
      <textarea
        placeholder="Description"
        value={formData.description}
        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
        required
      />
      <button type="submit">{selectedBook ? 'Update Book' : 'Add Book'}</button>
    </form>
  );
};

export default BookForm;
