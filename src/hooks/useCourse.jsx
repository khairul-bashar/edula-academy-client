import { useEffect, useState } from 'react';

const useCourse = (category) => {
  const [courses, setCourses] = useState([])
    const [loading, setLoading] =useState(true)
    useEffect(() => {
      fetch("https://summer-camp-server-ten-sigma.vercel.app/courses")
        .then((res) => res.json())
        .then((data) => {
          setCourses(data);
          setLoading(false);
        });
    }, [category]);
    return [courses, loading];
};

export default useCourse;