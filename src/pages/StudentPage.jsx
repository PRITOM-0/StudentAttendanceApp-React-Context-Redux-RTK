import React from "react";
import ppImg from "../assets/pp.png";
import { useParams } from "react-router";
import { useSelector } from "react-redux";

const StudentPage = () => {
  const { stdId } = useParams();
  const state = useSelector((state) => state.student);
  const student = [...state.filter((el) => el.id == stdId)][0];
 

  return (
    <div className="sm:w-[80%] md:w-3/4 lg:w-2/3  mx-auto py-10 border border-2 border-orange-500 rounded-lg  shadow bg-white ">
      <div className="w-[80%] mx-auto  py-5 bg-orange-100 border border-orange-500 text-center rounded-lg ">
        <h2 className="w-[80%] mx-auto text-center text-white  text-xl text-orange-500  py-2 rounded  mb-3 bg-orange-600">
          Student Information
        </h2>
        <div className="w-[80%] mx-auto flex gap-5 py-2">
          <div className="w-[50%] border border-2 h-50 rounded-lg border-orange-500 p-1">
            <img className="w-full h-full object-cover" src={ppImg} alt="" />
          </div>
          <div className="w-[50%] border border-2 h-50 rounded-lg border-orange-500">
            <div className=" mx-auto h-full rounded-lg shadow p-4 bg-white">
              <h2 className="text-xl my-5 font-bold mb-2 text-orange-600">
                {student.name}
              </h2>
              <p className="my-5 text-xl font-bold mb-2 text-orange-600">
                Class {student.class}
              </p>
              {student.status==true && <p className="text-xl font-bold text-orange-600 border rounded bg-green-500 text-white my-10">
                Present
              </p>}
              {student.status==false && <p className="text-xl font-bold text-orange-600 border rounded bg-red-500 text-white my-10">
                Absent
              </p>}
              {student.status==undefined && <p className="text-xl font-bold text-orange-600 border rounded bg-yellow-500 text-white my-10">
                Undefine
              </p>}
            </div>
          </div>
        </div>
        <button className=" w-[80%] mx-auto border border-2 mt-2 rounded-lg border-orange-500 bg-orange-600">
          <p className="text-white font-semibold">More Details</p>
        </button>
      </div>
    </div>
  );
};

export default StudentPage;
