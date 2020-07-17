import * as React from 'react';
import { useQuery } from 'react-query';
import { apiGetItem } from '../services/api';

const Comment = ({ id }) => {
    const { isLoading, error, data } = useQuery(['getComment', id], apiGetItem);

    if (isLoading) return <h2>comment loading</h2>;

    if (error) return <h2>error.messa</h2>;

    return (
        <li>
            {data.text}
            {data.kids
                ? data.kids.map((kidId) => <Comment id={kidId} key={kidId} />)
                : null}
        </li>
    );
};

export default Comment;
