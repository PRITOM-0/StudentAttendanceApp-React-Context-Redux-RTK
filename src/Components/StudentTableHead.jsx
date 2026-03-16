import React from "react";

const StudentTableHead = () => {
  return (
    <div className=" mt-5 text-center text-white text-lg text-orange-500 py-2 rounded-tl-lg rounded-tr-lg mb-3 bg-orange-600 flex justify-between px-10 box-border">
      <span>Name</span>
      <span>Class</span>
      <span>Status</span>
    </div>
  );
};

export default StudentTableHead;
