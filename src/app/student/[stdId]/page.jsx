"use client";
import ppImg from "@/assets/pp.jpg";
import Image from "next/image";
import { useFetchStudentsQuery } from "@/features/api/studentApi";
import { useParams } from "next/navigation";

const StudentPage = () => {
  const { stdId } = useParams();
  const { data: students, isLoading, isError } = useFetchStudentsQuery();

  if (isLoading) return <p className="text-center text-2xl mt-10">Loading...</p>;
  if (isError) return <p className="text-center text-2xl mt-10">Error loading data</p>;

  const student = students?.find((el) => el.id === stdId);
  if (!student) return <p className="text-center text-2xl mt-10">Student not found</p>;

  const statusClasses = {
    present: "bg-green-500",
    absent: "bg-red-500",
    none: "bg-yellow-500",
  };

  return (
    <div className="sm:w-11/12 md:w-3/4 lg:w-2/3 mx-auto mt-10 p-6 rounded-2xl bg-gradient-to-r from-blue-50 via-purple-50 to-indigo-50 shadow-2xl">
      <div className="w-full rounded-2xl bg-gradient-to-r from-indigo-100 via-purple-100 to-blue-100 p-6 shadow-lg">
        <h2 className="text-xl font-bold text-center text-indigo-600 mb-6 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 text-white py-2 rounded-lg">
          Student Information
        </h2>

        <div className="flex flex-col md:flex-row gap-6 items-center">
          <div className="md:w-1/2 border-2 border-indigo-300 rounded-xl overflow-hidden shadow-lg">
            <Image
              src={ppImg}
              alt="Profile Picture"
              className="w-full h-auto object-cover"
            />

          </div>

          <div className="md:w-1/2 bg-white rounded-xl p-4 shadow-lg flex flex-col gap-3">
            <h2 className="text-2xl font-bold text-indigo-600">{student.name}</h2>
            <p className="text-lg font-semibold text-indigo-500">Class {student.class}</p>
            <p
              className={`text-white font-bold text-center py-2 rounded-lg ${statusClasses[student.status]}`}
            >
              {student.status === "none" ? "Undefined" : student.status.charAt(0).toUpperCase() + student.status.slice(1)}
            </p>
            <button className="mt-4 py-2 px-6 rounded-full font-semibold text-white bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 shadow-lg hover:scale-105 transition-transform duration-300">
              More Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentPage;