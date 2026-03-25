import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

const RootPage = () => {
  const linkClasses =
    "py-2 px-6 rounded-xl font-semibold text-white bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 shadow-lg hover:scale-105 hover:from-indigo-500 hover:via-purple-500 hover:to-blue-500 transition-all duration-300";

  return (
    <>
      <div className="sm:w-11/12 md:w-3/4 lg:w-2/3 mx-auto mt-10 p-6 rounded-2xl bg-gradient-to-r from-indigo-100 via-purple-100 to-blue-100 shadow-2xl">
        <h1 className="text-center text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-600 to-indigo-500">
          Student Attendance App
        </h1>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link className={linkClasses} to={"/"}>
            Go Back
          </Link>
          <Link className={linkClasses} to={"/addStudent"}>
            Add Student
          </Link>
          <Link className={linkClasses} to={"/allStudent"}>
            All Students
          </Link>
          <Link className={linkClasses} to={"/searchStudent"}>
            Search Student
          </Link>
        </div>
      </div>

      <Outlet />
    </>
  );
};

export default RootPage;
