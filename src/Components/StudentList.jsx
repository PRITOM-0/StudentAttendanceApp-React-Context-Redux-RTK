import React, { useEffect, useState } from "react";
import StudentItem from "./StudentItem";
import StudentTableHead from "./StudentTableHead";
import { useFetchStudentsQuery } from "../Features/StudentAttendance/StudentApi";

const StudentList = () => {
  const { data: students, isLoading, isError, error } = useFetchStudentsQuery();
  const [listMode, setListMode] = useState("All");

  let newStudents = students;
  const listhandle = (m) => {
    setListMode(m);
  };
  if (listMode == "All") {
    newStudents = students;
  } else if (listMode == "P") {
    newStudents = [...students.filter((el) => el.status == "present")];
  } else if (listMode == "A") {
    newStudents = [...students.filter((el) => el.status == "absent")];
  } else if (listMode == "U") {
    newStudents = [...students.filter((el) => el.status == "none")];
  }

  return (
    <>
      <fieldset className="w-[95%] md:w-[90] lg:w-[80%] mx-auto bg-orange-200 pb-5 text-center rounded-lg mb-5 ">
        <h2 className=" text-center text-white  text-xl text-orange-500 py-2 rounded-tl-lg rounded-tr-lg mb-3 bg-orange-600">
          {listMode == "All" && "All Student"}
          {listMode == "P" && "Present Student"}
          {listMode == "A" && "Absent Student"}
          {listMode == "U" && "Undefine Student"}
        </h2>

        <div className=" flex flex-col px-10 gap-2 justify-between ">
          <button
            className="border rounded py-1 bg-orange-100 border-orange-500 text-orange-500 font-bold hover:text-white hover:bg-orange-600 hover:scale-98  transition duration-400 ease-in-out mx-2"
            onClick={() => {
              listhandle("All");
            }}
          >
            All Student
          </button>
          <button
            className="border rounded py-1 bg-orange-100 border-orange-500 text-orange-500 font-bold hover:text-white hover:bg-orange-600 hover:scale-98 transition duration-400 ease-in-out mx-2"
            onClick={() => {
              listhandle("P");
            }}
          >
            Present Student
          </button>
          <button
            className="border rounded py-1 bg-orange-100 border-orange-500 text-orange-500 font-bold hover:text-white hover:bg-orange-600 hover:scale-98 transition duration-400 ease-in-out mx-2"
            onClick={() => {
              listhandle("A");
            }}
          >
            Absent Student
          </button>
          <button
            className="border rounded py-1 bg-orange-100 border-orange-500 text-orange-500 font-bold hover:text-white hover:bg-orange-600 hover:scale-98 transition duration-400 ease-in-out mx-2"
            onClick={() => {
              listhandle("U");
            }}
          >
            Undefine Student
          </button>
        </div>
        <div className="">
          <div className="">
            <StudentTableHead />
          </div>
          <div className="h-60 overflow-y-auto scroll-container">
            {isLoading && (
              <p className="text-center font-bold text-2xl">Loading...</p>
            )}
            {isError && (
              <p className="text-center font-bold text-2xl">Error: {error}</p>
            )}
            {newStudents?.length == 0 && !isLoading && !isError && (
              <p className="text-center text-orange-600 font-bold text-2xl">
                No students found
              </p>
            )}
            {newStudents?.map((std) => (
              <div key={std.id}>
                <StudentItem std={std} />
              </div>
            ))}
          </div>
        </div>
      </fieldset>
    </>
  );
};

export default StudentList;
