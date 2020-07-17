import * as React from 'react';

import Navbar from './components/Navbar';
import StoryList from './components/StoryList';
import ShowStory from './components/ShowStory';

const App = () => {
    const [story, setStory] = React.useState('topStories');

    return (
        <div>
            <Navbar setStory={setStory} />
            <div className={'container'}>
                <StoryList story={story} />
                <ShowStory />
            </div>
        </div>
    );
};

export default App;
