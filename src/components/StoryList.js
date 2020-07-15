import * as React from 'react';

import { apiGetTopStories } from '../services/api';
import { useQuery } from 'react-query';

import InfiniteScroll from 'react-infinite-scroller';
import Story from './Story';

const StoryList = () => {
    const { isLoading, error, data } = useQuery('topStories', apiGetTopStories);
    const [upper, setUpper] = React.useState(10);
    const [hasMore, setHasMore] = React.useState(true);

    if (isLoading) return <div>Loading Stories...</div>;

    if (error) return <div>Error: {error.message}</div>;

    const load = (page) => {
        if (page * 10 > data.length) {
            console.log('storp');
            setHasMore(false);
            return;
        }
        setUpper(upper + 10);
    };

    return (
        <div className={'story-list-wrapper'}>
            <InfiniteScroll
                pageStart={0}
                loadMore={load}
                hasMore={hasMore}
                loader={<div key={0}>loading</div>}
                className={'story-list'}
                useWindow={false}
            >
                {data.slice(0, upper).map((id) => (
                    <Story key={id} id={id} />
                ))}
            </InfiniteScroll>
        </div>
    );
};

export default StoryList;
