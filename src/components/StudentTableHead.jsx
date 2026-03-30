import React from "react";

const StudentTableHead = () => {
  return (
    <div className="w-11/12 mx-auto my-2 p-3 rounded-xl bg-gradient-to-r from-blue-300 via-purple-300 to-indigo-300 shadow-lg flex justify-between items-center">
      {/* Fixed width columns */}
      <div className="flex w-full gap-4 font-bold text-indigo-700">
        {/* Name (Start) */}
        <div className="w-40 flex-shrink-0 text-start">Name</div>

        {/* Class (Center) */}
        <div className="w-32 flex-shrink-0 text-center">Class</div>

        {/* Status (End) */}
        <div className="w-28 flex-shrink-0 text-center ml-auto">Status</div>
      </div>
    </div>
  );
};

export default StudentTableHead;