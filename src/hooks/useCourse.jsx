import React, { useEffect, useState } from 'react';

const useCourse = () => {
    const [courses, setCourses] = useState([])
    const [loading, setLoading] =useState(true)
    useEffect(() => {
        fetch('course.json')
            .then(res => res.json())
            .then(data => {
                setCourses(data)
            setLoading(false)
            })
    },[])
    return [courses, loading];
};

export default useCourse;