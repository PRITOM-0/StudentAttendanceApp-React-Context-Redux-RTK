import React, { useState } from "react";
import StudentItem from "./StudentItem";

const StudentList = (props) => {
  const { studentList, setStudentList } = props;
  const [listMode, setListMode] = useState("All");
  let students=studentList;
  const listhandle = (m) => {
    setListMode(m);
  };
  if(listMode=="All"){
    students=studentList;
  }
  else if(listMode=="P"){
    students=[...studentList.filter(el=>(el.status==true))]
  }
  else if(listMode=="A"){
    students=[...studentList.filter(el=>(el.status==false))]
  }
  else if(listMode=="U"){
    students=[...studentList.filter(el=>(el.status==undefined))]
  }
  
  return (
    <>
      <fieldset>
        <legend>
          <h2>
            {listMode == "All" && "All Student"}
            {listMode == "P" && "Present Student"}
            {listMode == "A" && "Absent Student"}
            {listMode == "U" && "Undefine Student"}
          </h2>
        </legend>
        <div>
          <button
            onClick={() => {
              listhandle("All");
            }}
          >
            All Student
          </button>
          <button
            onClick={() => {
              listhandle("P");
            }}
          >
            Present Student
          </button>
          <button
            onClick={() => {
              listhandle("A");
            }}
          >
            Absent Student
          </button>
          <button
            onClick={() => {
              listhandle("U");
            }}
          >
            Undefine Student
          </button>
        </div>
        <br />
        <div>
          <h4>
            <span>Name ---------------- </span>
            <span>Class --------------- </span>
            <span>Status</span>
          </h4>
        </div>
        {students?.map((std) => (
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

export default StudentList;
