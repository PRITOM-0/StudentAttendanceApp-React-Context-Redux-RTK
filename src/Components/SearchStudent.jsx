import React, { useContext, useState } from "react";
import StudentItem from "./StudentItem";
import { useEffect } from "react";
import { classes } from "../assets/data";
import StudentTableHead from "./StudentTableHead";
import { useDispatch, useSelector } from "react-redux";
const demoSearch = {
  name: "",
  class: "",
  status: "",
};
const SearchStudent = () => {
  const state = useSelector((state) => state.studentState);
  const dispatch = useDispatch();
  const [SearchStudent, setSearchStudent] = useState([]);
  const [searchData, setSearchData] = useState(demoSearch);

  useEffect(() => {
    // If all search fields are empty, show no results
    const allEmpty =
      searchData.name === "" &&
      searchData.class === "" &&
      searchData.status === "";

    if (allEmpty) {
      setSearchStudent([]);
      return;
    }

    const filtered = state.filter((el) => {
      const nameMatch =
        searchData.name === "" ||
        el.name.toLowerCase().includes(searchData.name.toLowerCase());

      const classMatch =
        searchData.class === "" ||
        el.class.toLowerCase().includes(searchData.class.toLowerCase());

      const statusMatch =
        searchData.status === "" ||
        el.status ===
          (searchData.status === "true"
            ? true
            : searchData.status === "false"
              ? false
              : undefined);

      return nameMatch && classMatch && statusMatch;
    });

    setSearchStudent(filtered);
  }, [searchData, state]);

  const clearHandle = () => {
    setSearchStudent([]);
    setSearchData(demoSearch);
  };

  return (
    <>
      <fieldset className="bg-orange-200 pb-5 m-5 text-center rounded-lg ">
        <h2 className="text-center text-white  text-xl text-orange-500  py-2 rounded-tl-lg rounded-tr-lg mb-3 bg-orange-600">
          Search Student
        </h2>
        <div className="flex flex-col gap-1 mt-2 mx-5 justify-center">
          <label
            className="uppercase text-start text-orange-500 text-sm mt-2 "
            htmlFor="stdname"
          >
            Student Name
          </label>
          <input
            className="bg-orange-100 p-2 rounded border border-orange-500 placeholder-black"
            type="text"
            placeholder="Enter name"
            value={searchData.name}
            onChange={(e) => {
              setSearchData({ ...searchData, name: e.target.value });
            }}
          />
          <label
            className="uppercase text-start text-orange-500 text-sm mt-2"
            htmlFor="stdname"
          >
            Student class
          </label>
          <select
            className="bg-orange-100 p-2 rounded border border-orange-500"
            value={searchData.class}
            onChange={(e) => {
              setSearchData({ ...searchData, class: e.target.value });
            }}
          >
            <option value="" disabled>
              {" "}
              Select Class
            </option>
            {classes?.map((el) => (
              <option key={el} value={el}>
                {el}
              </option>
            ))}
          </select>

          <label
            className="uppercase text-start text-orange-500 text-sm mt-2"
            htmlFor="stdname"
          >
            Student Attendance
          </label>
          <select
            className="bg-orange-100 p-2 rounded border border-orange-500"
            value={searchData.status}
            onChange={(e) => {
              setSearchData({ ...searchData, status: e.target.value });
            }}
          >
            <option value="" disabled>
              {" "}
              Select Attendance
            </option>
            <option value={undefined}>Undefine</option>
            <option value={true}>Present</option>
            <option value={false}>Absent</option>
          </select>

          <button
            className="mt-3 text-center bg-orange-600 text-white font-bold text-sm p-2 rounded w-30 mx-auto"
            onClick={clearHandle}
          >
            Clear
          </button>

          {SearchStudent.length !== 0 && (
            <div>
              <StudentTableHead />
              {SearchStudent?.map((std) => (
                <div key={std.id}>
                  <StudentItem std={std} />
                </div>
              ))}
            </div>
          )}
        </div>
      </fieldset>
    </>
  );
};

export default SearchStudent;
