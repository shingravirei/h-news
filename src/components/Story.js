import * as React from 'react';
import * as timeAgo from 'timeago.js';

import { apiGetItem } from '../services/api';
import { useQuery } from 'react-query';

import StoryLoader from './StoryLoader';

const Story = ({ id }) => {
    const { isLoading, error, data } = useQuery(['story', id], apiGetItem);

    if (error) return <div>Error: error.message</div>;

    return (
        <div tabIndex={0} className={'story'}>
            {isLoading ? (
                <StoryLoader />
            ) : (
                <>
                    <p>{data.title}</p>
                    <div className={'story-stats'}>
                        <p>
                            <ion-icon name="arrow-up-outline"></ion-icon>
                            <span>{data.score}</span>
                        </p>
                        <p>
                            <ion-icon name="chatbox-outline"></ion-icon>
                            <span>{data.kids ? data.kids.length : 0}</span>
                        </p>
                        <p>
                            <ion-icon name="time-outline"></ion-icon>
                            <span>{timeAgo.format(data.time * 1000)}</span>
                        </p>
                        <p>
                            <ion-icon name="person-outline"></ion-icon>{' '}
                            <span>{data.by}</span>
                        </p>
                    </div>
                </>
            )}
        </div>
    );
};

export default Story;
