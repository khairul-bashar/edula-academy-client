import React, { useEffect, useState } from 'react';
import Subtitle from '../shared/Heading/Subtitle';
import Heading from '../shared/Heading/Heading';
import Container from '../shared/Container';
import Categories from '../Categories/Categories';
import Card from './Card';
import Button from '../Button/Button';
import { Helmet } from 'react-helmet-async';
import useCourse from '../../hooks/useCourse';
import { useSearchParams } from 'react-router-dom';
import useCart from '../../hooks/useCart';

const Course = () => {
  const [params, setParams] = useSearchParams('');
  const category = params.get("category");
  const [cart, refetch, isLoading] = useCart();
  // console.log(cart);
  const [selected, setSelected] = useState([])


  useEffect(() => {
    if (cart.length > 0) {
      setSelected(cart.map((single) => single.cartItemId));
    }
  }, [cart])
  
  console.log(selected);
  
  const [courses] = useCourse(category);
  console.log(courses);
  const filteCourse = courses.filter(a => a.status == 'approve')
  console.log('filte', filteCourse);
  
  const allCourses = category
    ? filteCourse.filter((course) => course.category == category)
    : filteCourse;
  
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
            <Card key={course._id} selected={selected} course={course} />
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