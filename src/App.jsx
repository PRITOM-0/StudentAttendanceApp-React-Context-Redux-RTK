import "./App.css";
import StudentForm from "./Components/StudentForm";
import StudentList from "./Components/StudentList";
import SearchStudent from "./Components/SearchStudent";
import { useState } from "react";
import { demoList } from "./assets/data";

function App() {
  const [studentList, setStudentList] = useState(demoList);
  return (
    <>
      <div className="md:w-2/3 lg:4/5 mx-auto border border-orange-500 rounded-lg pt-10 shadow my-5 bg-orange-100 h-full">
        <h1 className="text-center text-2xl font-bold text-orange-500">Student Attendance App</h1>
        <StudentForm
          studentList={studentList}
          setStudentList={setStudentList}
        />
        </div>
        <div className="md:w-2/3 lg:4/5 mx-auto border border-orange-500 rounded-lg pt-10 shadow my-5 bg-orange-100 h-full">
        <SearchStudent
          studentList={studentList}
          setStudentList={setStudentList}
        />
        </div>
        <div className="md:w-2/3 lg:4/5 mx-auto border border-orange-500 rounded-lg pt-10 shadow my-5 bg-orange-100 h-full">
        <StudentList
          studentList={studentList}
          setStudentList={setStudentList}
        />
      </div>
    </>
  );
}

export default App;
