import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="sm:w-11/12 md:w-3/4 lg:w-2/3 mx-auto mt-10 p-6 rounded-2xl bg-gradient-to-r from-indigo-100 via-purple-100 to-blue-100 shadow-2xl">
        <h1 className="text-center text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-600 to-indigo-500">
          Student Attendance App
        </h1>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-all ease-in-out duration-300" href={"/"}>
            Go Back
          </Link>
          <Link className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded transition-all ease-in-out duration-300" href={"/addStudent"}>
            Add Student
          </Link>
          <Link className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition-all ease-in-out duration-300" href={"/allStudent"}>
            All Students
          </Link>
          <Link className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded transition-all ease-in-out duration-300" href={"/searchStudent"}>
            Search Student
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
