import "./App.css";
import StudentForm from "./Components/StudentForm";
import StudentList from "./Components/StudentList";
import { useState } from "react";
const demolist = [
  {
    id: 1,
    name: "Pritom",
    class: "Class 100",
    status: undefined,
    editMode:false,
  },
];

function App() {
  const [studentList, setStudentList] = useState(demolist);
  return (
    <>
      <h1>Student Attendance App</h1>
      <StudentForm studentList={studentList} setStudentList={setStudentList} />
      <StudentList studentList={studentList} setStudentList={setStudentList} />
    </>
  );
}

export default App;
