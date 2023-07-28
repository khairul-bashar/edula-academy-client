import React from 'react';
import Contact from '../../components/Contact/Contact';
import Hero from '../../components/HeroSection/Hero';
import Course from '../../components/Courses/Course';

const Home = () => {
    return (
        <div>
            <Hero />
            <Contact />
            <Course/>
        </div>
    );
};

export default Home;