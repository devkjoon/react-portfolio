import React from 'react';
import Nav from './nav';

function Header(props) {
    const { currentTab, handleTabChange } = props;

    return (
        <div>
            <section>
                <header className='flex-row px-1'>
                    <div>
                        <h1>Joon Kim's Portfolio</h1>
                    </div>
                    <div>
                        <nav
                        currentTab={currentTab}
                        handleTabChange={handleTabChange}
                        ></nav>
                    </div>
                </header>
            </section>
            <section class='hero'>
                <div class='hero-cta'>
                    <h2>Welcome</h2>
                    <p>
                        Welcome to Joon's Portfolio page created with React! 
                        Here, you are able to find a small collection of my 
                        work created over the course of the project.
                    </p>
                </div>
            </section>
        </div>
    );
}

export default Header;