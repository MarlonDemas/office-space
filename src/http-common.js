import axios from "axios";

export default axios.create({
  baseURL: "https://makes-nodejs-mysql.herokuapp.com/api",
  headers: {
    "Content-type": "application/json",
  },
});
