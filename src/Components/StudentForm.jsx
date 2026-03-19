import React, { useContext, useState } from "react";
import { classes } from "../assets/data";
import { studentContext } from "../context/StudentContext";
const StudentForm = () => {
  const { dispatch } = useContext(studentContext);
  const [inputName, setInputName] = useState("");
  const [inputClass, setInputClass] = useState("");

  const submithandle = (e) => {
    e.preventDefault();
    if (inputName.trim() === "" || inputClass.trim() === "") {
      alert("Enter Student Information");
      return;
    }
    dispatch({
      type: "ADD_STUDENT",
      payload: { name: inputName, class: inputClass },
    });
    setInputClass("");
    setInputName("");
  };

  return (
    <>
      <form
        className="w-[95%] mx-auto my-5 bg-orange-200 pb-5 text-center rounded-lg"
        onSubmit={(e) => submithandle(e)}
      >
        <h2 className="text-center text-white  text-xl text-orange-500  py-2 rounded-tl-lg rounded-tr-lg mb-3 bg-orange-600">
          Add Student
        </h2>
        <div
          className="w-[95%] mx-auto flex flex-col gap-1 mt-2 justify-cent
er"
        >
          <label
            className="uppercase text-start text-orange-500 text-sm mt-2"
            htmlFor="stdname"
          >
            Student Name
          </label>
          <input
            className="bg-orange-100 placeholder-black p-2 rounded border border-orange-500"
            type="text"
            name="stdname"
            placeholder="Enter name"
            value={inputName}
            onChange={(e) => {
              setInputName(e.target.value);
            }}
          />
          <label
            className="uppercase text-start text-orange-500 text-sm mt-2"
            htmlFor="stdclass"
          >
            {" "}
            Student Class{" "}
          </label>
          <select
            className="bg-orange-100 p-2 rounded border border-orange-500"
            name="stdclass"
            value={inputClass}
            onChange={(e) => {
              setInputClass(e.target.value);
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
          <input
            className="w-[30%] mx-auto mt-3 text-center bg-orange-600 text-white font-bold text-sm p-2 rounded  "
            type="submit"
            value="Add Student"
          />
        </div>
      </form>
    </>
  );
};

export default StudentForm;
