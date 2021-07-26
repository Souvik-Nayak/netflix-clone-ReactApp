import axios from "axios";

/* baseURL to make requets(FETCH API DATA) to the movie database */
const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3"
});

export default instance;