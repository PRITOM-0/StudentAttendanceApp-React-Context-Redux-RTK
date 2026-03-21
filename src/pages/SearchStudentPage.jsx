import React from "react";
import SearchStudent from "../Components/SearchStudent";
const SearchStudentPage = () => {
  return (
    <>
      <div className="sm:w-[90%] md:w-3/4 lg:w-2/3  mx-auto border border-orange-500 rounded-lg pt-10 shadow my-5 bg-orange-100">
        <SearchStudent />
      </div>
    </>
  );
};

export default SearchStudentPage;
