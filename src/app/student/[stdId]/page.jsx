
import StudentInfo from "@/components/StudentInfo";
import { getAllStudents } from "@/features/studentApi";

const StudentPage = async() => {
  const students= await getAllStudents();
  return (
    <div className="sm:w-11/12 md:w-3/4 lg:w-2/3 mx-auto mt-10 p-6 rounded-2xl bg-linear-to-r from-blue-50 via-purple-50 to-indigo-50 shadow-2xl">
      <div className="w-full rounded-2xl bg-linear-to-r from-indigo-100 via-purple-100 to-blue-100 p-6 shadow-lg">
        <h2 className="text-xl font-bold text-center text-indigo-600 mb-6 bg-linear-to-r from-blue-500 via-purple-500 to-indigo-500 py-2 rounded-lg">
          Student Information
        </h2>
        <StudentInfo students={students} />
      </div>
    </div>
  );
};

export default StudentPage;
  