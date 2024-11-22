import axios from "axios";

const API_URL = "http://localhost:8080/api/auth"; // Replace with your backend URL


const login = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/login`, { email, password });
    return response.data; // Typically includes a token or user info
  } catch (error) {
    console.error("Login error:", error.response?.data || error.message);
    throw error.response?.data || { message: "Something went wrong!" };
  }
};

export default { login };
