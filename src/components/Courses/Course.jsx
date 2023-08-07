import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useSearchParams } from "react-router-dom";
import useCourse from "../../hooks/useCourse";
import useRole from "../../hooks/useRole";
import Button from "../Button/Button";
import Categories from "../Categories/Categories";
import Container from "../shared/Container";
import Heading from "../shared/Heading/Heading";
import Subtitle from "../shared/Heading/Subtitle";
import Card from "./Card";

const Course = () => {
  const [params, setParams] = useSearchParams("");
  const category = params.get("category");
  // console.log(cart);
  const [selected, setSelected] = useState([]);
  const [userRole] = useRole();

  const [courses] = useCourse(category);
  const filterCourse = courses.filter((a) => a.status == "approve");

  const allCourses = category
    ? filterCourse.filter((course) => course.category == category)
    : filterCourse;

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
            <Card
              key={course._id}
              selected={selected}
              course={course}
              userRole={userRole}
            />
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
