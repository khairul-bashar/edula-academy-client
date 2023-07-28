import React from 'react';
import Contact from '../../components/Contact/Contact';
import Hero from '../../components/HeroSection/Hero';
import Course from '../../components/Courses/Course';
import LearnWith from '../../components/LearnWith/LearnWith';

const Home = () => {
    return (
        <div>
            <Hero />
            <Contact />
            <Course />
            <LearnWith/>
        </div>
    );
};

export default Home;