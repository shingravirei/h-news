import axios from 'axios';

const client = axios.create({ baseURL: 'https://hacker-news.firebaseio.com' });

const apiGetStories = async (_, storyType) => {
    let res;
    switch (storyType) {
        case 'newStories':
            res = await client.get('/v0/newstories.json');

            return res.data;

        case 'bestStories':
            res = await client.get('/v0/beststories.json');

            return res.data;

        default:
            res = await client.get('/v0/topstories.json');

            return res.data;
    }
};

const apiGetItem = async (_, id) => {
    const res = await client.get(`/v0/item/${id}.json`);

    return res.data;
};

export { apiGetStories, apiGetItem };
