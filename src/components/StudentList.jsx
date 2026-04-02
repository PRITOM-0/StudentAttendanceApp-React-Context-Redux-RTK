"use client";
import { useState } from "react";
import StudentItem from "./StudentItem";
import StudentTableHead from "./StudentTableHead";


const StudentList = ({ students }) => {
 
  const [listMode, setListMode] = useState("All");

  let filteredStudents = students;

  const handleFilter = (mode) => {
    setListMode(mode);
    if (mode === "P")
      filteredStudents = students.filter((s) => s.status === "present");
    else if (mode === "A")
      filteredStudents = students.filter((s) => s.status === "absent");
    else if (mode === "U")
      filteredStudents = students.filter((s) => s.status === "none");
    else filteredStudents = students;
  };

  if (listMode === "P")
    filteredStudents = students.filter((s) => s.status === "present");
  else if (listMode === "A")
    filteredStudents = students.filter((s) => s.status === "absent");
  else if (listMode === "U")
    filteredStudents = students.filter((s) => s.status === "none");

  return (
    <div className="w-11/12 mx-auto my-5 bg-linear-to-r from-blue-100 via-purple-100 to-indigo-100 p-5 rounded-2xl shadow-xl">
      {/* Header */}
      <h2 className="text-2xl font-bold text-indigo-700 text-center mb-5">
        {listMode === "All" && "All Students"}
        {listMode === "P" && "Present Students"}
        {listMode === "A" && "Absent Students"}
        {listMode === "U" && "Undefined Students"}
      </h2>

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-3 mb-5">
        {[
          { label: "All Students", value: "All" },
          { label: "Present", value: "P" },
          { label: "Absent", value: "A" },
          { label: "Undefined", value: "U" },
        ].map((btn) => (
          <button
            key={btn.value}
            onClick={() => handleFilter(btn.value)}
            className={`px-4 py-2 rounded-lg font-semibold text-white shadow-lg transition-transform duration-300 transform hover:scale-105 ${
              listMode === btn.value
                ? "bg-linear-to-r from-indigo-500 via-purple-500 to-blue-500"
                : "bg-linear-to-r from-blue-300 via-purple-300 to-indigo-300 hover:from-indigo-500 hover:via-purple-500 hover:to-blue-500"
            }`}
          >
            {btn.label}
          </button>
        ))}
      </div>

      <StudentTableHead />

      {/* Student Items */}
      <div className="max-h-100 overflow-y-auto mt-2">
        {filteredStudents?.map((std) => (
          <StudentItem key={std.id} std={std} />
        ))}
      </div>
    </div>
  );
};

export default StudentList;
