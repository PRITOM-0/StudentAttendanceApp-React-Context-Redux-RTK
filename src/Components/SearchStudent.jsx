import { useState, useEffect } from "react";
import StudentItem from "./StudentItem";
import StudentTableHead from "./StudentTableHead";
import { classes } from "../assets/data";
import { useFetchStudentsQuery } from "../Features/StudentAttendance/StudentApi";

const demoSearch = { name: "", class: "", status: "" };

const SearchStudent = () => {
  const { data: students, isLoading, isError } = useFetchStudentsQuery();
  const [searchData, setSearchData] = useState(demoSearch);
  const [filteredStudents, setFilteredStudents] = useState([]);

  useEffect(() => {
    const allEmpty =
      searchData.name === "" &&
      searchData.class === "" &&
      searchData.status === "";
    if (allEmpty) {
      setFilteredStudents([]);
      return;
    }

    const filtered = students?.filter((s) => {
      const nameMatch =
        searchData.name === "" ||
        s.name.toLowerCase().includes(searchData.name.toLowerCase());
      const classMatch =
        searchData.class === "" ||
        s.class.toLowerCase().includes(searchData.class.toLowerCase());
      const statusMatch =
        searchData.status === "" || s.status === searchData.status;
      return nameMatch && classMatch && statusMatch;
    });

    setFilteredStudents(filtered);
  }, [searchData, students]);

  const clearHandle = () => setSearchData(demoSearch);

  return (
    <div className="w-11/12 md:w-3/4 lg:w-2/3 mx-auto my-5 p-5 rounded-2xl bg-gradient-to-r from-blue-100 via-purple-100 to-indigo-100 shadow-xl">
      {/* Header */}
      <h2 className="text-2xl font-bold text-indigo-700 text-center mb-5">
        Search Students
      </h2>

      {/* Form container */}
      <div className=" p-5 rounded-xl shadow-md">
        <div className="flex flex-col md:flex-row gap-4 flex-wrap justify-center">
          {/* Name */}
          <input
            type="text"
            placeholder="Student Name"
            value={searchData.name}
            onChange={(e) =>
              setSearchData({ ...searchData, name: e.target.value })
            }
            className="p-3 rounded-lg border border-2 border-indigo-500 focus:ring-2 focus:ring-purple-400 w-full md:w-64 placeholder-gray-400 text-gray-700"
          />

          {/* Class */}
          <select
            value={searchData.class}
            onChange={(e) =>
              setSearchData({ ...searchData, class: e.target.value })
            }
            className="p-3 rounded-lg border border-2 border-indigo-500 focus:ring-2 focus:ring-purple-400 w-full md:w-40 text-gray-500"
          >
            <option value="" disabled>
              Select Class
            </option>
            {classes.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>

          {/* Status */}
          <select
            value={searchData.status}
            onChange={(e) =>
              setSearchData({ ...searchData, status: e.target.value })
            }
            className="p-3 rounded-lg border border-2 border-indigo-500 focus:ring-2 focus:ring-purple-400 w-full md:w-40 text-gray-500 placeholder-gray-400"
          >
            <option value="" disabled>
              Attendance
            </option>
            <option value="none">Undefined</option>
            <option value="present">Present</option>
            <option value="absent">Absent</option>
          </select>

          {/* Clear Button */}
          <button
            onClick={clearHandle}
            className="px-6 py-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500 text-white font-semibold rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
          >
            Clear
          </button>
        </div>
      </div>

      {/* Search Results */}
      {filteredStudents.length > 0 && (
        <>
          <StudentTableHead />
          <div className="max-h-[400px] overflow-y-auto mt-2">
            {filteredStudents.map((std) => (
              <StudentItem key={std.id} std={std} />
            ))}
          </div>
        </>
      )}

      {!isLoading && !isError && filteredStudents.length === 0 && (
        <p className="text-center text-indigo-700 font-bold text-xl mt-5">
          No students found
        </p>
      )}

      {isLoading && (
        <p className="text-center text-indigo-600 font-bold text-xl mt-5">
          Loading...
        </p>
      )}
      {isError && (
        <p className="text-center text-red-600 font-bold text-xl mt-5">
          Error loading data
        </p>
      )}
    </div>
  );
};

export default SearchStudent;
