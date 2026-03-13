import { useState } from "react";

const StudentItem = (props) => {
  const { std, setStudentList, studentList } = props;
  const [editName, setEditName] = useState("");
  const [editClass, setEditClass] = useState("");

  const deletehandle = () => {
    setStudentList([...studentList.filter((el) => el.id !== std.id)]);
  };
  const edithandle = () => {
    setStudentList([
      ...studentList.map((el) => {
        if (std.id == el.id) {
          return {
            ...el,
            editMode: true,
          };
        }
        return el;
      }),
    ]);
    setEditName(std.name);
    setEditClass(std.class);
  };
  const updatehandle = () => {
    if (editName === "" || editClass === "") {
      alert("Enter Student Information");
      return;
    }
    setStudentList([
      ...studentList.map((el) => {
        if (std.id == el.id) {
          return {
            ...el,
            name: editName,
            class: editClass,
            editMode: false,
          };
        }
        return el;
      }),
    ]);
    setEditName("");
    setEditClass("");
  };
  const presenthandle = () => {
    setStudentList([
      ...studentList.map((el) => {
        if (std.id == el.id) {
          return {
            ...el,
            status: true,
          };
        }
        return el;
      }),
    ]);
  };
  const absenthandle = () => {
    setStudentList([
      ...studentList.map((el) => {
        if (std.id == el.id) {
          return {
            ...el,
            status: false,
          };
        }
        return el;
      }),
    ]);
  };

  return (
    <>
      <hr />
      <div>
        <span>
          {std.editMode == false && std.name}
          {std.editMode == true && (
            <input
              type="text"
              name="stdname"
              placeholder="Enter name"
              value={editName}
              onChange={(e) => {
                setEditName(e.target.value);
              }}
            />
          )}{" "}
          ---------------{" "}
        </span>
        <span>
          {std.editMode == false && std.class}
          {std.editMode == true && (
            <select
              name="stdclass"
              value={editClass}
              onChange={(e) => {
                setEditClass(e.target.value);
              }}
            >
              <option value=""> </option>
              <option value="Class 10">10</option>
              <option value="Class 11">11</option>
              <option value="Class 12">12</option>
              <option value="Class 13">13</option>
            </select>
          )}{" "}
          ------------{" "}
        </span>
        <span>
          {std.status == undefined && "Undefined"}
          {std.status == true && "Present"}
          {std.status == false && "Absent"} -------
        </span>
        <span>
          {" "}
          {std.editMode == false && (
            <input type="button" value="Edit" onClick={edithandle} />
          )}
          {std.editMode == true && (
            <input type="button" value="Update" onClick={updatehandle} />
          )}{" "}
        </span>
        <span>
          {" "}
          <input type="button" value="Delete" onClick={deletehandle} />{" "}
        </span>
        {std.status == undefined && (
          <span>
            {" "}
            <input type="button" value="Present" onClick={presenthandle} />{" "}
          </span>
        )}
        {std.status == undefined && (
          <span>
            {" "}
            <input type="button" value="Absent" onClick={absenthandle} />{" "}
          </span>
        )}
        {std.status == true && (
          <span>
            {" "}
            <input type="button" value="Absent" onClick={absenthandle} />{" "}
          </span>
        )}
        {std.status == false && (
          <span>
            {" "}
            <input type="button" value="Present" onClick={presenthandle} />{" "}
          </span>
        )}
      </div>
    </>
  );
};

export default StudentItem;
