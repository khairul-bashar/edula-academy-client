import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import Heading from "../../../components/shared/Heading/Heading";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const InstructorCourse = () => {
  const [axiosSecure] = useAxiosSecure();
  const { user } = useAuth();

  const {
    data: selectedClass = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["selectedData"],
    queryFn: async () => {
      const res = await axiosSecure(`/instructor?email=${user?.email}`);
      return res.data;
    },
  });

  return (
    <>
      <Helmet>
        <title>Edula | enrolled class</title>
      </Helmet>

      <Heading
        subTitle={"My Upload classes"}
        title={"Uploaded Classes"}
        primary
      />

      <div className="overflow-x-auto">
        <table className="table table-xs table-pin-rows table-pin-cols z-0">
          <thead>
            <tr>
              <th>Course Name</th>
                          <th>Category</th>
                          <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {selectedClass &&
              selectedClass?.map((classInfo) => (
                  <tr>
                      <th>{classInfo.course_name}</th>
                      <th>{classInfo.category}</th>
                      <th>{classInfo.price}</th>
                  </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default InstructorCourse;
