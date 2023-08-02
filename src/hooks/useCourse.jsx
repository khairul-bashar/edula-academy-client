import React, { useEffect, useState } from 'react';

const useCourse = (category) => {
    const [courses, setCourses] = useState([])
    const [loading, setLoading] =useState(true)
    useEffect(() => {
      fetch("http://localhost:3000/courses")
        .then((res) => res.json())
        .then((data) => {
          setCourses(data);
          setLoading(false);
        });
    }, [category]);
    return [courses, loading];
};

export default useCourse;