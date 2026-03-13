import "./App.css";
import StudentForm from "./Components/StudentForm";
import StudentList from "./Components/StudentList";
import SearchStudent from "./Components/SearchStudent";
import { useState } from "react";

const demoList = [
  { id: 1, name: "Pritom", class: "10", status: undefined, editMode: false },
  { id: 2, name: "Rahim", class: "10", status: true, editMode: false },
  { id: 3, name: "Karim", class: "11", status: false, editMode: false },
  { id: 4, name: "Sadia", class: "12", status: true, editMode: false },
  { id: 5, name: "Rai", class: "13", status: false, editMode: false },
  { id: 6, name: "Pritom", class: "10", status: true, editMode: false },
  { id: 7, name: "Rahim", class: "10", status: false, editMode: false },
  { id: 8, name: "Karim", class: "11", status: undefined, editMode: false },
  { id: 9, name: "Sadia", class: "12", status: true, editMode: false },
  { id: 10, name: "Rai", class: "13", status: false, editMode: false },
  { id: 11, name: "Anik", class: "10", status: true, editMode: false },
  { id: 12, name: "Nabila", class: "11", status: false, editMode: false },
  { id: 13, name: "Anik", class: "10", status: undefined, editMode: false },
  { id: 14, name: "Nabila", class: "11", status: true, editMode: false },
  { id: 15, name: "Imran", class: "12", status: false, editMode: false },
  { id: 16, name: "Imran", class: "12", status: true, editMode: false },
  { id: 17, name: "Tanvir", class: "13", status: false, editMode: false },
  { id: 18, name: "Tanvir", class: "13", status: undefined, editMode: false },
  { id: 19, name: "Lamia", class: "10", status: true, editMode: false },
  { id: 20, name: "Lamia", class: "10", status: false, editMode: false },
];

function App() {
  const [studentList, setStudentList] = useState(demoList);
  return (
    <>
      <h1>Student Attendance App</h1>
      <StudentForm studentList={studentList} setStudentList={setStudentList} />
      <SearchStudent
        studentList={studentList}
        setStudentList={setStudentList}
      />
      <StudentList studentList={studentList} setStudentList={setStudentList} />
    </>
  );
}

export default App;
