import { Link } from "react-router";
import { Outlet } from "react-router";

const RootPage = () => {
  return (
    <>
      <div className="sm:w-[90%] md:w-3/4 lg:w-2/3 mx-auto py-5 border border-orange-500 rounded-lg shadow my-5 bg-orange-100">
        <h1 className="text-center text-2xl font-bold text-orange-500">
          Student Attendance App
        </h1>
        <div className="w-[90%] mx-auto mt-5 flex    justify-center gap-2">
          <Link className="border rounded py-1 px-5 bg-orange-100 border-orange-500 text-orange-500 font-bold hover:text-white hover:bg-orange-600 hover:scale-98  transition duration-400 ease-in-out" to={"/"}>
           Go-back
          </Link>
          <Link className="border rounded py-1 px-5 bg-orange-100 border-orange-500 text-orange-500 font-bold hover:text-white hover:bg-orange-600 hover:scale-98  transition duration-400 ease-in-out" to={"/addStudent"}>
            Add Student
          </Link>
          <Link className="border rounded py-1 px-5 bg-orange-100 border-orange-500 text-orange-500 font-bold hover:text-white hover:bg-orange-600 hover:scale-98  transition duration-400 ease-in-out"to={"/allStudent"}>
            All Student
          </Link>
          <Link className="border rounded py-1 px-5 bg-orange-100 border-orange-500 text-orange-500 font-bold hover:text-white hover:bg-orange-600 hover:scale-98  transition duration-400 ease-in-out" to={"/searchStudent"}>
            Search Student
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default RootPage; // default export
