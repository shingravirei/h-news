import * as React from 'react';

import Comment from './Comment';
import { Context } from '../App';

const CommentList = () => {
    const { story } = React.useContext(Context);

    if (!story) return <h1>other nada</h1>;
    return (
        <div className={'comments-wrapper'}>
            <ul className={'comments'}>
                {story.kids.map((id) => (
                    <Comment id={id} key={id} />
                ))}
            </ul>
        </div>
    );
};

export default CommentList;
