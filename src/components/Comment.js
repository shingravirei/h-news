import * as React from 'react';
import { useQuery } from 'react-query';
import { apiGetItem } from '../services/api';

const Comment = ({ id }) => {
    const { isLoading, error, data } = useQuery(['getComment', id], apiGetItem);

    if (isLoading) return <h2>comment loading</h2>;

    if (error) return <h2>error.messa</h2>;

    // TODO: add recursive call to get child comments
    return <li>{data && data.text}</li>;
};

export default Comment;
