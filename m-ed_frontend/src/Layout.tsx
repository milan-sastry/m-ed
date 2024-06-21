import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

type LayoutProps = {
    children: React.ReactNode; // Typing children as React.ReactNode
};

const Layout: React.FC<LayoutProps> = ({ children }) => {

    
    const location = useLocation();
    const path = location.pathname;

    return (
        <div className="home-container">
            <div className="taskbar">
                <Link to="/home" className={`tab ${path === '/home' ? 'active' : ''}`}>
                    <img className="tab-icon" src="icons8-home-50.png" alt="Home" />
                </Link>
                <Link to="/workouts" className={`tab ${path === '/workouts' ? 'active' : ''}`}>
                    <img className="tab-icon" src="icons8-fitness-50.png" alt="Workouts" />
                </Link>
                <Link to="/nutrition" className={`tab ${path === '/nutrition' ? 'active' : ''}`}>
                    <img className="tab-icon" src="icons8-nutrition-50.png" alt="Nutrition" />
                </Link>
                <Link to="/statistics" className={`tab ${path === '/statistics' ? 'active' : ''}`}>
                    <img className="tab-icon" src="icons8-stats-50.png" alt="Stats" />
                </Link>
                <Link to="/account" className={`tab ${path === '/account' ? 'active' : ''}`}>
                    <img className="tab-icon" src="icons8-account-50.png" alt="Account" />
                </Link>
            </div>
            <div className="content">{children}</div>
        </div>
    );
};

export default Layout;
    
