import React from "react";
import Subtitle from "../shared/Heading/Subtitle";
import Heading from "../shared/Heading/Heading";
import TeacherCard from "./TeacherCard";
import Container from "../shared/Container";
import { teacherData } from "./teacherData";

const Teacher = () => {
  return (
    <div className="py-10 bg-gray-200">
      <Subtitle label="Popular Teacher" center />
      <Heading title="Explore Popular Teacher" center />
      <div>
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5 gap-3">
            {teacherData.map((teacher) => (
                <TeacherCard key={teacher.id} teacher={teacher} />
            ))}
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Teacher;
