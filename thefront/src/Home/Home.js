import React from 'react';
import Navbar from "../Components/misc/Navbar";
const Home = () => {
    return (
        <div className='flex'>
            <Navbar />
            <div className='sm:ml-32 flex items-center justify-center w-full h-screen border-purple-500 border bg-green-300'>
                <h1>Welcome to the Home page!</h1>
            </div>
            {/* Add your content here */}
        </div>
    );
};

export default Home;