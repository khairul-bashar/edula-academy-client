import React, { useState } from 'react';
import Subtitle from '../shared/Heading/Subtitle';
import Heading from '../shared/Heading/Heading';
import Container from '../shared/Container';
import Categories from '../Categories/Categories';

const Course = () => {

    const [activeTab, setActiveTab] = useState("remote");
    const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };
    return (
      <div className=" py-10 bg-cover bg-center bg-no-repeat bg-[url('../src/assets/Images/89780.jpg')]">
        <Subtitle label="Popular Courses" center />
        <Heading title="Explore Popular Courses" center />
        <Categories/>
      </div>
    );
};

export default Course;