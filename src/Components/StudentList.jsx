import React, { useState } from "react";
import StudentItem from "./StudentItem";
import StudentTableHead from "./StudentTableHead";
import { useSelector } from "react-redux";

const StudentList = () => {
  const state = useSelector((state)=>state.studentState);
  console.log(state);
  
  const [listMode, setListMode] = useState("All");
  let students = state ;
  const listhandle = (m) => {
    setListMode(m);
  };
  if (listMode == "All") {
    students = state ;
  } else if (listMode == "P") {
    students = [...state.filter((el) => el.status == true)];
  } else if (listMode == "A") {
    students = [...state.filter((el) => el.status == false)];
  } else if (listMode == "U") {
    students = [...state.filter((el) => el.status == undefined)];
  }

  return (
    <>
      <fieldset className="w-[95%] md:w-[90] lg:w-[80%] mx-auto bg-orange-200 pb-5 text-center rounded-lg">
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
          <div>
            {students?.map((std) => (
            <div key={std.id}>
              <StudentItem
                std={std}
              />
            </div>
          ))}
          </div>
        </div>
      </fieldset>
    </>
  );
};

export default StudentList;
