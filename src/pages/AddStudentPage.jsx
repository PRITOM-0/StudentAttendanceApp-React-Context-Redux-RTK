import React from "react";
import StudentForm from "../Components/StudentForm";
const AddStudentPage = () => {
  return (
    <>
      <div className=" md:w-3/4 lg:w-2/3 mx-auto border border-orange-500 rounded-lg pt-10 shadow my-5 bg-orange-100">
        <StudentForm />
      </div>
    </>
  );
};

export default AddStudentPage;
