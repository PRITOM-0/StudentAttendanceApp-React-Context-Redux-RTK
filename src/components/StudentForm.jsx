"use client";
import { useState } from "react";
import { classes } from "../assets/data";
import { addStudent } from "@/features/studentApi";

const StudentForm = () => {
  const [inputName, setInputName] = useState("");
  const [inputClass, setInputClass] = useState("");

  const submitHandle = (e) => {
    e.preventDefault();
    if (!inputName.trim() || !inputClass.trim()) {
      alert("Enter Student Information");
      return;
    }
    const student = {
      id: Date.now() + "",
      name: inputName,
      class: inputClass,
      status: "none",
      editMode: false,
    };
    addStudent(student);
    setInputName("");
    setInputClass("");
  };

  return (
    <form
      onSubmit={submitHandle}
      className="flex flex-col gap-4 w-full md:w-3/4 mx-auto p-5 bg-linear-to-r from-blue-200 via-purple-200 to-indigo-200 rounded-2xl shadow-lg"
    >
      <h2 className="text-2xl font-bold text-indigo-700 text-center mb-4">
        Add Student
      </h2>

      {/* Name Input */}
      <input
        type="text"
        placeholder="Student Name"
        value={inputName}
        onChange={(e) => setInputName(e.target.value)}
        className="p-3 rounded-lg border border-2 border-indigo-500 focus:ring-2 focus:ring-purple-400 w-full"
      />

      {/* Class Select */}
      <select
        value={inputClass}
        onChange={(e) => setInputClass(e.target.value)}
        className="p-3 rounded-lg border border-2 border-indigo-500 focus:ring-2 focus:ring-purple-400 w-full text-gray-500 placeholder-gray-400"
      >
        <option value="" disabled>
          Select Class
        </option>
        {classes?.map((c) => (
          <option key={c} value={c}>
            {c}
          </option>
        ))}
      </select>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-40 mx-auto py-3 px-6 bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500 text-white font-bold rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
      >
        Add Student
      </button>
    </form>
  );
};

export default StudentForm;