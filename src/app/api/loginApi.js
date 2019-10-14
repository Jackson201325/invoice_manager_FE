import axios from 'axios';

const BASE_URL = 'http://localhost:3000/';
const Login = () => {
  return axios
    .post(`${BASE_URL}auth/login`, {
      email: 'jacksonh201325@gmail.com',
      password: 'Blackjack21blackjack21'
    })
    .then(response => {
      console.log(response);
    });
};

export default {
  Login
};
