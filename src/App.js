import * as React from 'react';

import Navbar from './components/Navbar';
import StoryList from './components/StoryList';
import ShowStory from './components/ShowStory';

export const Context = React.createContext({
    storyId: {},
    changeStory: () => {}
});

const App = () => {
    const [storyType, setStoryType] = React.useState('topStories');
    const [story, setStory] = React.useState(null);

    return (
        <div>
            <Navbar setStoryType={setStoryType} />
            <div className={'container'}>
                <Context.Provider
                    value={{
                        story,
                        setStory
                    }}
                >
                    <StoryList storyType={storyType} />
                    <ShowStory />
                </Context.Provider>
            </div>
        </div>
    );
};

export default App;
