import React, { useState } from 'react';
import Subtitle from '../shared/Heading/Subtitle';
import Heading from '../shared/Heading/Heading';
import Container from '../shared/Container';
import Categories from '../Categories/Categories';
import Card from './Card';
import Button from '../Button/Button';
import { Helmet } from 'react-helmet-async';
import useCourse from '../../hooks/useCourse';
import { useSearchParams } from 'react-router-dom';

const Course = () => {
  const [params, setParams] = useSearchParams('');
  const category = params.get("category");


  
  const [courses] = useCourse(category);
  const allCourses = category ? courses.filter(course => course.category == category) : courses;
  
    const [activeTab, setActiveTab] = useState("remote");
    const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };
  return (
    <div className=" py-10 bg-cover bg-center bg-no-repeat bg-[url('../src/assets/Images/89780.jpg')]">
      <Helmet>
        <title>Edula || Courses</title>
      </Helmet>
      <Subtitle label="All Courses" center />
      <Heading title="Explore All Courses" center />
      <Categories />
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-10">
          {allCourses.map((course) => (
            <Card key={course._id} course={course} />
          ))}
        </div>
        <div>
          <div className="text-center">
            <Button label=" View All Courses" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Course;