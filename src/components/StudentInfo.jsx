"use client";
import Image from "next/image";
import ppImg from "@/assets/pp.jpg";
import { useParams } from "next/navigation";

const StudentInfo = ({ students }) => {
  const { stdId } = useParams();

  const student = students.find((s) => s.id === stdId);


  if (!student) {
    return <div>Student not found</div>;
  }

  const statusClasses = {
    present: "bg-green-500",
    absent: "bg-red-500",
    none: "bg-yellow-500",
  };

  return (
    <div className="flex flex-col md:flex-row gap-6 items-center">
      <div className="md:w-1/2 border-2 border-indigo-300 rounded-xl overflow-hidden shadow-lg">
        <Image src={ppImg} alt="Profile Picture" />
      </div>

      <div className="md:w-1/2 bg-white rounded-xl p-4 shadow-lg flex flex-col gap-3">
        <h2 className="text-2xl font-bold text-indigo-600">{student.name}</h2>

        <p className="text-lg font-semibold text-indigo-500">
          Class {student.class}
        </p>

        <p
              className={`text-white font-bold text-center py-2 rounded-lg ${statusClasses[student.status]}`}
            >
              {student.status === "none" ? "Undefined" : student.status.charAt(0).toUpperCase() + student.status.slice(1)}
            </p>
    

        <button className="mt-4 py-2 px-6 rounded-full font-semibold text-white bg-linear-to-r from-blue-500 via-purple-500 to-indigo-500 shadow-lg hover:scale-105 transition-transform duration-300">
          More Details
        </button>
      </div>
    </div>
  );
};

export default StudentInfo;
