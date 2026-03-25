import { useState } from "react";
import { classes } from "../assets/data";
import { Link } from "react-router";

import {
  useDeleteStudentsMutation,
  useUpdateStudentsMutation,
} from "../Features/StudentAttendance/StudentApi";

const StudentItem = (props) => {
  const [deleteStudents] = useDeleteStudentsMutation();
  const [updateStudents] = useUpdateStudentsMutation();
  const { std } = props;
  const [editName, setEditName] = useState("");
  const [editClass, setEditClass] = useState("");
  const [studentEditBar, setStudentEditBar] = useState(false);

  const showEditBar = () => {
    if (studentEditBar == true) {
      setStudentEditBar(false);
    } else {
      setStudentEditBar(true);
    }
  };

  const deletehandle = () => {
    deleteStudents(std.id);
    showEditBar();
  };
  const edithandle = () => {
    const rest = {
      name: std.name,
      class: std.class,
      status: std.status,
      editMode: true,
    };
    updateStudents({ id: std.id, student: rest });
    setEditName(std.name);
    setEditClass(std.class);
  };
  const updatehandle = () => {
    if (editName.trim() === "" || editClass.trim() === "") {
      alert("Enter Student Information");
      return;
    }
    const rest = {
      name: editName,
      class: editClass,
      status: std.status,
      editMode: false,
    };
    updateStudents({ id: std.id, student: rest });
    setEditName("");
    setEditClass("");
    showEditBar();
  };
  const presenthandle = () => {
    const rest = {
      name: std.name,
      class: std.class,
      status: "present",
      editMode: std.editMode,
    };
    updateStudents({ id: std.id, student: rest });
    showEditBar();
  };
  const absenthandle = () => {
    const rest = {
      name: std.name,
      class: std.class,
      status: "absent",
      editMode: std.editMode,
    };
    updateStudents({ id: std.id, student: rest });
    showEditBar();
  };

  return (
    <>
      <div className=" w-[90%] mx-auto group flex flex-col justify-center ">
        <div
          className={
            !std.editMode
              ? "mb-1 text-center text-lg  py-2  flex justify-between px-10 border border-orange-700 rounded text-sm font-bold text-orange-500  hover:bg-orange-100"
              : " mb-1 text-center text-lg  py-2  flex justify-between px-10 border border-orange-700 rounded text-sm font-bold text-orange-500 bg-orange-600"
          }
          onClick={showEditBar}
        >
          <span className="w-25 text-start">
            {std.editMode == false && std.name}
            {std.editMode == true && (
              <input
                className="w-25  bg-orange-100 px-2 py-1 rounded border border-orange-500"
                type="text"
                name="stdname"
                placeholder="Enter name"
                value={editName}
                onChange={(e) => {
                  setEditName(e.target.value);
                }}
              />
            )}
          </span>
          <span className="w-25">
            {std.editMode == false && std.class}
            {std.editMode == true && (
              <select
                className="bg-orange-100 px-2 py-1 rounded border border-orange-500"
                name="stdclass"
                value={editClass}
                onChange={(e) => {
                  setEditClass(e.target.value);
                }}
              >
                {classes?.map((el) => (
                  <option key={el} value={el}>
                    {el}
                  </option>
                ))}
              </select>
            )}
          </span>
          <span
            className={
              std.editMode ? "w-25 text-white text-end pt-1" : "w-25 text-end"
            }
          >
            {std.status == "none" && "None"}
            {std.status == "present" && "Present"}
            {std.status == "absent" && "Absent"}
          </span>
        </div>
        <div
          className={
            studentEditBar
              ? "text-white-500 mx-auto mb-2 h-full flex items-center px-6 pb-1"
              : " hidden mb-2"
          }
        >
          <Link
            className="w-full text-center text-white font-bold border border-rose-500 px-2 rounded-full mx-1 my-1 w-1/4 bg-yellow-500 hover:bg-rose-700 text-sm pb-1 transition duration-300 ease-in-out"
            to={`/${std.id}`}
          >
            <input type="button" value="Details" />
          </Link>
          <span className="w-full text-center text-white font-bold border border-indigo-500 px-2 rounded-full mx-1 my-1 w-1/4 bg-indigo-500 hover:bg-indigo-700 text-sm pb-1 transition duration-300 ease-in-out">
            {std.editMode == false && (
              <input type="button" value="Edit" onClick={edithandle} />
            )}
            {std.editMode == true && (
              <input type="button" value="Update" onClick={updatehandle} />
            )}
          </span>

          {std.status == "none" && (
            <span className="w-full text-center text-white font-bold border border-green-500 px-2 rounded-full mx-1 my-1 w-1/4 bg-green-500 hover:bg-green-700 text-sm pb-1 transition duration-300 ease-in-out">
              <input type="button" value="Present" onClick={presenthandle} />
            </span>
          )}
          {std.status == "none" && (
            <span className="w-full text-center text-white font-bold border border-fuchsia-500 px-2 rounded-full mx-1 my-1 w-1/4 bg-fuchsia-500 hover:bg-fuchsia-700 text-sm pb-1 transition duration-300 ease-in-out">
              <input type="button" value="Absent" onClick={absenthandle} />
            </span>
          )}
          {std.status == "present" && (
            <span className="w-full text-center text-white font-bold border border-fuchsia-500 px-2 rounded-full mx-1 my-1 w-1/4 bg-fuchsia-500 hover:bg-fuchsia-700 text-sm pb-1 transition duration-300 ease-in-out">
              <input type="button" value="Absent" onClick={absenthandle} />
            </span>
          )}
          {std.status == "absent" && (
            <span className="w-full text-center text-white font-bold border border-green-500 px-2 rounded-full mx-1 my-1 w-1/4 bg-green-500 hover:bg-green-700 text-sm pb-1 transition duration-300 ease-in-out">
              <input type="button" value="Present" onClick={presenthandle} />
            </span>
          )}
          <span className="w-full text-center text-white font-bold border border-rose-500 px-2 rounded-full mx-1 my-1 w-1/4 bg-rose-500 hover:bg-rose-700 text-sm pb-1 transition duration-300 ease-in-out">
            <input type="button" value="Delete" onClick={deletehandle} />
          </span>
        </div>
      </div>
    </>
  );
};

export default StudentItem;
