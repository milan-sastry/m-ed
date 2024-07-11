import React, { useState } from 'react';
import { ReactComponent as HomeIcon } from '../assets/home.svg';
import { ReactComponent as SearchIcon } from '../assets/search.svg';
import { ReactComponent as TextIcon } from '../assets/text.svg';

const Navbar = () => {
    const [selectedTab, setSelectedTab] = useState('home');

    const tabs = [
        { id: 'home', Icon: HomeIcon, label: 'Home' },
        { id: 'search', Icon: SearchIcon, label: 'Search' },
        { id: 'text', Icon: TextIcon, label: 'Text' },
    ];

    return (
        <div className="fixed bottom-0 w-screen h-16 flex items-center border-t bg-white border-gray-300">
            {tabs.map(({ id, Icon }) => (
                <button
                    key={id}
                    className={`w-1/3 h-full flex justify-center items-center hover:bg-blue-300 ${selectedTab === id ? 'font-bold' : ''}`}
                    onClick={() => setSelectedTab(id)}
                >
                    <Icon className={selectedTab === id ? ':':''} />
                </button>
            ))}
        </div>
    );
}

export default Navbar;