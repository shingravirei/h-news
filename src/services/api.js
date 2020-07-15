import axios from 'axios';

const client = axios.create({ baseURL: 'https://hacker-news.firebaseio.com' });

const apiGetTopStories = async () => {
    const res = await client.get('/v0/topstories.json');

    return res.data;
};

const apiGetItem = async (_, id) => {
    const res = await client.get(`/v0/item/${id}.json`);

    return res.data;
};

export { apiGetTopStories, apiGetItem };
