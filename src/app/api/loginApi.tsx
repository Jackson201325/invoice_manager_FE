import axios from 'axios';

const BASE_URL = 'http://localhost:3000/';

// const credentials1 = {
//   email: 'jacksonh201325@gmail.com',
//   password: 'Blackjack21blackjack21'
// };

export const Login = credentials => {
  return axios.post(`${BASE_URL}auth/login`, credentials).then(response => {
    console.log(response);
    return response;
  });
};
