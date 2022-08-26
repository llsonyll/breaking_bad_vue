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
    getCharactersByPage(page = 0, offset = 5) {
        return BreakingBadQuery.get(`/characters?limit=${page}&offset=${offset}`);
    },
    getBreakingBadEpisodes() {
        return BreakingBadQuery.get('/episodes?series=Breaking+Bad');
    }
}