import React from "react";
import SearchStudent from "../Components/SearchStudent";

const SearchStudentPage = () => {
  return (
    <div className="sm:w-11/12 md:w-3/4 lg:w-2/3 mx-auto mt-10 p-6 rounded-2xl bg-gradient-to-r from-blue-50 via-purple-50 to-indigo-50 shadow-2xl">
      <SearchStudent />
    </div>
  );
};

export default SearchStudentPage;
