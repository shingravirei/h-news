import * as React from 'react';

const Navbar = ({ setStory }) => {
    return (
        <div className={'navbar'}>
            <nav className={'navbar-nav'}>
                <ul className={'nav-list'}>
                    <li className={'nav-brand'}>
                        <ion-icon name="logo-hackernews"></ion-icon> H-News
                    </li>
                    <li className={'nav-item'}>
                        <button onClick={() => setStory('topStories')}>
                            Top
                        </button>
                    </li>
                    <li className={'nav-item'}>
                        <button onClick={() => setStory('newStories')}>
                            New
                        </button>
                    </li>
                    <li className={'nav-item'}>
                        <button onClick={() => setStory('bestStories')}>
                            Best
                        </button>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;
