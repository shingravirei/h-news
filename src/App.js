import * as React from 'react';

import Navbar from './components/Navbar';
import StoryList from './components/StoryList';

const App = () => {
    const [story, setStory] = React.useState('topStories');

    return (
        <div>
            <Navbar setStory={setStory} />
            <div className={'container'}>
                <StoryList story={story} />
            </div>
        </div>
    );
};

export default App;
