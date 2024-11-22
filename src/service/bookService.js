import axios from "axios";

const API_BASE_URL = "http://localhost:8080/api/book";

const getAuthHeader = () => {
    const token = localStorage.getItem("token"); // Retrieve token from localStorage
    return token ? { Authorization: `Bearer ${token}` } : {};
};


const bookService = {
  fetchBooks: async () => {
    try {
      const response = await axios.get(API_BASE_URL,{
        headers: getAuthHeader(), 
      });
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || "Error fetching books.");
    }
  },

  

  addBook: async (book) => {
    try {
      const response = await axios.post(API_BASE_URL, book,{
        headers: getAuthHeader(), 
      });
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || "Error adding book.");
    }
  },

  updateBook: async (id, updatedBook) => {
    try {
      const response = await axios.put(`${API_BASE_URL}/${id}`, updatedBook,{
        headers: getAuthHeader(), 
      });
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || "Error updating book.");
    }
  },

  deleteBook: async (id) => {
    try {
      await axios.delete(`${API_BASE_URL}/${id}`,{
        headers: getAuthHeader(), 
      });
    } catch (error) {
      throw new Error(error.response?.data?.message || "Error deleting book.");
    }
  },

  searchBookById: async (id) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/${id}`,{
        headers: getAuthHeader(), 
      });

      console.log('--------------',response)
      return response;
    } catch (error) {
      throw new Error(error.response?.data?.message || "Error searching book.");
    }
  },
};

export default bookService;
