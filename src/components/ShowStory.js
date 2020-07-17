import * as React from 'react';

import CommentList from './CommentList';

const ShowStory = () => {
    return (
        <div className={'show-story'}>
            <h1>All the Ways to Make a Web Component</h1>
            <div className={'story-stats'}>
                <p>
                    <ion-icon name="arrow-up-outline"></ion-icon>
                    <span>{23}</span>
                </p>
                <p>
                    <ion-icon name="chatbox-outline"></ion-icon>
                    <span>{12}</span>
                </p>
                <p>
                    <ion-icon name="time-outline"></ion-icon>
                    <span>{'11 minutes ago'}</span>
                </p>
                <p>
                    <ion-icon name="person-outline"></ion-icon>{' '}
                    <span>{'someone'}</span>
                </p>
            </div>
            <CommentList />
        </div>
    );
};

export default ShowStory;
