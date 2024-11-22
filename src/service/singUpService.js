import axios from "axios";

const API_BASE_URL = "http://localhost:8080/api/auth";

const singUpService = {
  signup: async (username, email, password) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/signup`, {
        username,
        email,
        password,
      });

      console.log(response.status);

      if(response.status=== 201){
        return true;
      }else{
        return false;
      }
     
    } catch (error) {
      throw new Error(
        error.response?.data?.message || "An error occurred during signup."
      );
    }
  },
};

export default singUpService;
