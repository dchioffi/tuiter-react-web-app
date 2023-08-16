import axios from "axios";

// Get the URL from the environment variable
const SERVER_API_URL = process.env.REACT_APP_SERVER_API_URL;
// Concatenate the base URL with the users endpoint
const USERS_URL = `${SERVER_API_URL}/users`;

// Create an Axios instance with the withCredentials option set to true
// This allows cookies to be sent and received across origins
const api = axios.create({ withCredentials: true });

// Export the login function, which takes a username and password
// and makes a POST request to the login endpoint
export const login = async ({ username, password }) => {
  const response = await api.post(`${USERS_URL}/login`, { username, password });
  const user = response.data;
  return user;
};
export const logout = async () => {
    const response = await api.post(`${USERS_URL}/logout`);
    return response.data;
   };
   export const profile = async () => {
    const response = await api.post(`${USERS_URL}/profile`);
    return response.data; // Return the data property of the response
  };
   export const updateUser = async (user) => {
    const response = await api.put(`${USERS_URL}/${user._id}`, user);
    return response.data;
   };
   export const register = async ({ username, password }) => { }