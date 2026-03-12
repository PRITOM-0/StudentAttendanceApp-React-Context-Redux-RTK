import React, { useState } from "react";

const StudentForm = (props) => {
  const { studentList, setStudentList } = props;
  const [inputName, setInputName] = useState("");
  const [inputClass, setInputClass] = useState("");

  const submithandle = (e) => {
    e.preventDefault();
    if (inputName === "" || inputClass === "") {
      alert("Enter Student Information");
      return;
    }
    const newStudent = {
      id: Date.now() + "",
      name: inputName,
      class: inputClass,
      status: undefined,
      editMode:false,
    };
    setStudentList([...studentList, newStudent]);
    setInputClass("");
    setInputName("");
  };

  return (
    <>
      <form onSubmit={(e) => submithandle(e)}>
        <fieldset>
          <legend><h2>Add Student</h2></legend>
          <label htmlFor="stdname">Name: </label>
          <input
            type="text"
            name="stdname"
            placeholder="Enter name"
            value={inputName}
            onChange={(e) => {
              setInputName(e.target.value);
            }}
          />
          <br />
          <br />
          <label htmlFor="stdclass">Class: </label>
          <select
            name="stdclass"
            value={inputClass}
            onChange={(e) => {
              setInputClass(e.target.value);
            }}
          >
            <option value=""> </option>
            <option value="Class 10">10</option>
            <option value="Class 11">11</option>
            <option value="Class 12">12</option>
            <option value="Class 13">13</option>
          </select>
          <br />
          <br />
          <input type="submit" value="Add Student" />
        </fieldset>
      </form>
    </>
  );
};

export default StudentForm;
