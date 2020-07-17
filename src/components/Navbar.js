import * as React from 'react';

const Navbar = ({ setStoryType }) => {
    return (
        <div className={'navbar'}>
            <nav className={'navbar-nav'}>
                <ul className={'nav-list'}>
                    <li className={'nav-brand'}>
                        <ion-icon name="logo-hackernews"></ion-icon> H-News
                    </li>
                    <li className={'nav-item'}>
                        <button onClick={() => setStoryType('topStories')}>
                            Top
                        </button>
                    </li>
                    <li className={'nav-item'}>
                        <button onClick={() => setStoryType('newStories')}>
                            New
                        </button>
                    </li>
                    <li className={'nav-item'}>
                        <button onClick={() => setStoryType('bestStories')}>
                            Best
                        </button>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;
