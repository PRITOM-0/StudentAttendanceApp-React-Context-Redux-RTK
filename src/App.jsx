import "./App.css";
import StudentForm from "./Components/StudentForm";
import StudentList from "./Components/StudentList";
import SearchStudent from "./Components/SearchStudent";
import { useState } from "react";

function App() {
  return (
    <>
      <div className="w-full md:w-1/2 lg:w-1/3 mx-auto border border-orange-500 rounded-lg pt-10 shadow my-5 bg-orange-100">
        <h1 className="text-center text-2xl font-bold text-orange-500">
          Student Attendance App
        </h1>
        <StudentForm />
      </div>
      <div className="w-full md:w-1/2 lg:w-1/3 mx-auto border border-orange-500 rounded-lg pt-10 shadow my-5 bg-orange-100">
        <SearchStudent />
      </div>
      <div className="w-full md:w-1/2 lg:w-1/3 mx-auto border border-orange-500 rounded-lg pt-10 shadow my-5 bg-orange-100">
        <StudentList />
      </div>
    </>
  );
}

export default App;
