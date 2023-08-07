import useCourse from '../../hooks/useCourse';
import useRole from '../../hooks/useRole';
import Container from '../shared/Container';
import Heading from '../shared/Heading/Heading';
import Subtitle from '../shared/Heading/Subtitle';
import Card from './Card';

const PopularCourses = () => {
  const [userRole] = useRole();
  const [courses] = useCourse([])
  const popular_course = courses.filter(course => course.category === 'popular')
    return (
      <div className=" py-10 bg-cover bg-center bg-no-repeat bg-[url('../src/assets/Images/89780.jpg')]">
        <Container>
          <Subtitle label="Popular Courses" center />
          <Heading title="Explore Popular Courses" center />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-10">
            {popular_course.map((course) => (
              <Card course={course} key={course._id} userRole={userRole} />
            ))}
          </div>
        </Container>
      </div>
    );
};

export default PopularCourses;