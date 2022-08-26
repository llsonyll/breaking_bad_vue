import axios from 'axios';

const BreakingBadQuery = axios.create({
    baseURL: 'https://www.breakingbadapi.com/api',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    }
}
);

export default {
    getRandomQuote() {
        return BreakingBadQuery.get('/quote/random');
    },
    // getHouse(id) {
    //     return GOT_query.get('/houses/' + id);
    // }
}