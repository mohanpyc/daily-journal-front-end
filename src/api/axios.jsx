import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:1900/api'
});

// REGISTER
export const registerUser = (data) => {
  return API.post('/users/register', data);
};

// LOGIN
export const loginUser = (data) => {
  return API.post('/users/login', data);
};

// ADD JOURNAL (auth required)
export const addJournal = (data, token) => {
  return API.post('/journal', data, {
    headers: {
      Authorization: token
    }
  });
};

// GET JOURNAL
export const getJournal = (token) => {
  return API.get('/journal', {
    headers: {
      Authorization: token
    }
  });
};