import React from "react";
import StudentForm from "../Components/StudentForm";

const AddStudentPage = () => {
  return (
    <div className="w-11/12 md:w-3/4 lg:w-2/3 mx-auto my-5 p-5 rounded-2xl bg-gradient-to-r from-blue-100 via-purple-100 to-indigo-100 shadow-xl">
      <StudentForm />
    </div>
  );
};

export default AddStudentPage;
