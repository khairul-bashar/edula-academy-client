import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Container from "../shared/Container";
import Heading from "../shared/Heading/Heading";
import Subtitle from "../shared/Heading/Subtitle";
import TeacherCard from "./TeacherCard";

const Teacher = () => {

  const [axiosSecure] = useAxiosSecure();
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await axiosSecure.get("/users");
    return res.data;
  });

  const instructor = users.filter(user => user.role === 'instructor')
  
  return (
    <div className="py-10 bg-gray-200">
      <Subtitle label="Popular Teacher" center />
      <Heading title="Explore Popular Teacher" center />
      <div>
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
            {instructor.map((teacher) => (
              <TeacherCard key={teacher._id} teacher={teacher} />
            ))}
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Teacher;
