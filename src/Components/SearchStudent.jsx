import React, { useState } from "react";
import StudentItem from "./StudentItem";
import { useEffect } from "react";
const demoSearch = {
  name: "",
  class: "",
  status: "",
};
const SearchStudent = (props) => {
  const { studentList, setStudentList } = props;
  const [SearchStudent, setSearchStudent] = useState([]);
  const [searchData, setSearchData] = useState(demoSearch);

useEffect(() => {
  const filtered = studentList.filter((el) => {
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
}, [searchData, studentList]);


  const clearHandle = () => {
    setSearchStudent([]);
    setSearchData(demoSearch);
  };

  return (
    <>
      <fieldset>
        <legend>
          <h2>Search Student</h2>
        </legend>
        <label>Name:</label>
        <input
          type="text"
          value={searchData.name}
          onChange={(e) => {
            setSearchData({ ...searchData, name: e.target.value });
          }}
        />
        <br />
        <label>Class:</label>
        <select
          value={searchData.class}
          onChange={(e) => {
            setSearchData({ ...searchData, class: e.target.value });
          }}
        >
          <option value=""> </option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
          <option value="13">13</option>
        </select>
        <br />
        <label>Status:</label>
        <select
          value={searchData.status}
          onChange={(e) => {
            setSearchData({ ...searchData, status: e.target.value });
          }}
        >
          <option value=""> </option>
          <option value={undefined}>Undefine</option>
          <option value={true}>Present</option>
          <option value={false}>Absent</option>
        </select>
        <br />
        <br />
        <button onClick={clearHandle}>Clear</button>

        <div>
          <h4>
            <span>Name ---------------- </span>
            <span>Class --------------- </span>
            <span>Status</span>
          </h4>
        </div>
        {SearchStudent?.map((std) => (
          <div key={std.id}>
            <StudentItem
              std={std}
              setStudentList={setStudentList}
              studentList={studentList}
            />
          </div>
        ))}
      </fieldset>
    </>
  );
};

export default SearchStudent;
