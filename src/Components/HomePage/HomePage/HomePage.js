import React from 'react';
import Features from '../Features/Features';
import Header from '../Header/Header';
import Screenshot from '../Header/Screenshot/Screenshot';
import Tournaments from '../Tournaments/Tournaments';

const HomePage = () => {
    return (
        <div className="mt-5 pt-4">
            <Header/>
            <Screenshot/>
            <Features/>
            <Tournaments/>
        </div>
    );
};

export default HomePage;