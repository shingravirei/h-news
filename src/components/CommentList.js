import * as React from 'react';
import { useQuery } from 'react-query';
import { apiGetItem } from '../services/api';

import Comment from './Comment';

const CommentList = () => {
    const { isLoading, error, data } = useQuery(
        ['getItem', 23872625],
        apiGetItem
    );

    if (isLoading) return <h1>getting comments</h1>;

    if (error) return <h1>{error.message}</h1>;

    return (
        <div className={'comments-wrapper'}>
            <ul className={'comments'}>
                {data.kids.map((id) => (
                    <Comment id={id} key={id} />
                ))}
            </ul>
        </div>
    );
};

export default CommentList;
