import * as React from 'react';
import * as timeAgo from 'timeago.js';

import { Context } from '../App';
import CommentList from './CommentList';

const ShowStory = () => {
    const { story } = React.useContext(Context);

    if (!story) return <h1>nada</h1>;

    return (
        <div className={'show-story'}>
            <h1>{story.title}</h1>
            <div className={'story-stats'}>
                <p>
                    <ion-icon name="arrow-up-outline"></ion-icon>
                    <span>{story.score}</span>
                </p>
                <p>
                    <ion-icon name="chatbox-outline"></ion-icon>
                    <span>{story.kids.length}</span>
                </p>
                <p>
                    <ion-icon name="time-outline"></ion-icon>
                    <span>{timeAgo.format(story.time * 1000)}</span>
                </p>
                <p>
                    <ion-icon name="person-outline"></ion-icon>{' '}
                    <span>{story.by}</span>
                </p>
            </div>
            <CommentList />
        </div>
    );
};

export default ShowStory;
