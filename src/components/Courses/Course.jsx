import React, { useState } from 'react';
import Subtitle from '../shared/Heading/Subtitle';
import Heading from '../shared/Heading/Heading';
import Container from '../shared/Container';
import Categories from '../Categories/Categories';
import Card from './Card';
import Button from '../Button/Button';

const Course = () => {

    const [activeTab, setActiveTab] = useState("remote");
    const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };
    return (
      <div className=" py-10 bg-cover bg-center bg-no-repeat bg-[url('../src/assets/Images/89780.jpg')]">
        <Subtitle label="Popular Courses" center />
        <Heading title="Explore Popular Courses" center />
        <Categories />
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-10">
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
          <div>
            <div className='text-center'>
              <Button label=" View All Courses" />
            </div>
          </div>
        </Container>
      </div>
    );
};

export default Course;