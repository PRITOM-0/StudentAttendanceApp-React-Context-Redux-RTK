import { createContext ,useState} from "react";
import { demoList } from "../assets/data";

export const studentContext = createContext();

const StudentContext = ({ children }) => {
  const [studentList, setStudentList] = useState(demoList);
  const ctxValue = { studentList, setStudentList };
  return (
    <studentContext.Provider value={ctxValue}>
      {children}
    </studentContext.Provider>
  );
};

export default StudentContext;
