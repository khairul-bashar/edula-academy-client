import { Helmet } from "react-helmet-async";
import EmptyState from "../../../components/shared/EmtyState";
import Heading from "../../../components/shared/Heading/Heading";
import Loader from "../../../components/shared/Loader";
import UseAllUser from "../../../hooks/useAllUser";
import UserTable from "./UserTable";

const ManageUsers = () => {
  const [users, isLoading, refetch] = UseAllUser();
  return (
    <>
      <Helmet>
        <title>Edula | Manage Users</title>
      </Helmet>
      <Heading
        title={"Make user admin or instructor"}
        subTitle={"Manage all users"}
      />
      {isLoading && <Loader />}
      {users && Array.isArray(users) && users.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="table table-xs table-pin-rows table-pin-cols z-0">
            <thead>
              <tr>
                <th className="hidden md:inline-flex">Image</th>
                <th className="hidden md:inline-flex">Email</th>
                <th>Name</th>
                <th>Role</th>
                <th>Action</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {users &&
                users?.map((user) => (
                  <UserTable key={user._id} user={user} refetch={refetch} />
                ))}
            </tbody>
          </table>
        </div>
      ) : (
        !isLoading && (
          <EmptyState
            address="/"
            reason={"There is no user sign up yet "}
            message={"Go to boost your site"}
            label={"Back to home"}
          />
        )
      )}
    </>
  );
};

export default ManageUsers;
