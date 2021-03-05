import axios from 'axios';

const KEY = 'AIzaSyBRkRbZglZq5wgDljn3YaQTl7MAi8MeY-U';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxresults: 5,
        key: KEY
    }
})