import { useState } from "react";
import { classes } from "../assets/data";
import Link from "next/link";
import {
  useDeleteStudentsMutation,
  useUpdateStudentsMutation,
} from "../features/api/studentApi";

const StudentItem = ({ std }) => {
  const [deleteStudents] = useDeleteStudentsMutation();
  const [updateStudents] = useUpdateStudentsMutation();

  const [editName, setEditName] = useState(std.name);
  const [editClass, setEditClass] = useState(std.class);
  const [editMode, setEditMode] = useState(std.editMode);
  const [showActions, setShowActions] = useState(false);
  const [isSelected, setIsSelected] = useState(false);

  const toggleEdit = () => setEditMode(!editMode);
  const toggleActions = () => {
    setShowActions(!showActions);
    setIsSelected(!isSelected); // Add border on click
  };

  const deleteHandle = () => {
    deleteStudents(std.id);
    setShowActions(false);
    setIsSelected(false);
  };

  const updateHandle = () => {
    if (!editName.trim() || !editClass.trim()) {
      alert("Enter Student Information");
      return;
    }
    updateStudents({
      id: std.id,
      student: { ...std, name: editName, class: editClass, editMode: false },
    });
    setEditMode(false);
    setShowActions(false);
  };

  const updateStatus = (status) => {
    updateStudents({ id: std.id, student: { ...std, status } });
    setShowActions(false);
  };

  const statusColors = {
    present: "bg-green-500",
    absent: "bg-red-500",
    none: "bg-yellow-500",
  };

  return (
    <div
      className={`w-11/12 mx-auto my-2 p-3 rounded-xl bg-gradient-to-r from-blue-100 via-purple-100 to-indigo-100 shadow-lg transition-all duration-200 ${
        isSelected ? "border-4 border-indigo-500" : ""
      }`}
    >
      {/* Row */}
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={toggleActions}
      >
        {/* Fixed Width Columns: Name | Class | Status */}
        <div className="flex w-full gap-4 items-center">
          {/* Name (Start) */}
          <div className="w-40 flex-shrink-0">
            {editMode ? (
              <input
                type="text"
                value={editName}
                onChange={(e) => setEditName(e.target.value)}
                className="p-2 rounded-lg border border-indigo-300 focus:ring-2 focus:ring-purple-400 w-full"
              />
            ) : (
              <span className="text-indigo-700 font-semibold">{std.name}</span>
            )}
          </div>

          {/* Class (Center) */}
          <div className="w-32 flex-shrink-0 text-center">
            {editMode ? (
              <select
                value={editClass}
                onChange={(e) => setEditClass(e.target.value)}
                className="p-2 rounded-lg border border-indigo-300 focus:ring-2 focus:ring-purple-400 w-full"
              >
                {classes.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            ) : (
              <span className="text-indigo-500 font-medium">{std.class}</span>
            )}
          </div>

          {/* Status (End) */}
          <div className="w-28 flex-shrink-0 text-center ml-auto">
            <span
              className={`px-3 py-1 rounded-lg text-white font-bold ${
                statusColors[std.status]
              }`}
            >
              {std.status === "none"
                ? "Undefined"
                : std.status.charAt(0).toUpperCase() + std.status.slice(1)}
            </span>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      {showActions && (
        <div className="flex flex-wrap justify-center gap-2 mt-3">
          <Link
            href={`/${std.id}`}
            className="px-3 py-1 rounded-full bg-indigo-500 text-white font-bold shadow hover:scale-105 transition-transform duration-300"
          >
            Details
          </Link>

          {editMode ? (
            <button
              onClick={updateHandle}
              className="px-3 py-1 rounded-full bg-purple-500 text-white font-bold shadow hover:scale-105 transition-transform duration-300"
            >
              Update
            </button>
          ) : (
            <button
              onClick={toggleEdit}
              className="px-3 py-1 rounded-full bg-purple-500 text-white font-bold shadow hover:scale-105 transition-transform duration-300"
            >
              Edit
            </button>
          )}

          {std.status !== "present" && (
            <button
              onClick={() => updateStatus("present")}
              className="px-3 py-1 rounded-full bg-green-500 text-white font-bold shadow hover:scale-105 transition-transform duration-300"
            >
              Present
            </button>
          )}

          {std.status !== "absent" && (
            <button
              onClick={() => updateStatus("absent")}
              className="px-3 py-1 rounded-full bg-red-500 text-white font-bold shadow hover:scale-105 transition-transform duration-300"
            >
              Absent
            </button>
          )}

          <button
            onClick={deleteHandle}
            className="px-3 py-1 rounded-full bg-rose-500 text-white font-bold shadow hover:scale-105 transition-transform duration-300"
          >
            Delete
          </button>
        </div>
      )}
    </div>
  );
};

export default StudentItem;