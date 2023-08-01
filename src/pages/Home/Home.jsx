import React from 'react';
import Contact from '../../components/Contact/Contact';
import Hero from '../../components/HeroSection/Hero';
import LearnWith from '../../components/LearnWith/LearnWith';
import Teacher from '../../components/Teacher/Teacher';
import Testimonial from '../../components/Testimoinal/Testimonial';
import { Helmet } from 'react-helmet-async';
import PopularCourses from '../../components/Courses/PopularCourses';


const Home = () => {
    return (
      <div>
        <Helmet>
          <title>Edula || Home</title>
        </Helmet>
        ;
        <Hero />
        <Contact />
        <PopularCourses />
        <Teacher />
        <LearnWith />
        <Testimonial />
      </div>
    );
};

export default Home;