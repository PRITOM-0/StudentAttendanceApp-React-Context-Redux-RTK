// npm i react-router-dom
import { createBrowserRouter } from "react-router-dom";
import RootPage from "../pages/RootPage";
import AllStudentPage from "../pages/AllStudentPage";
import AddStudentPage from "../pages/AddStudentPage";
import SearchStudentPage from "../pages/SearchStudentPage";
import StudentPage from "../pages/StudentPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
    children: [
      { index: true, element:<div></div> },
      {
        path: "/addStudent",
        element: <AddStudentPage />,
      },
      {
        path: "/allStudent",
        element: <AllStudentPage/>,
      },
      {
        path: "/searchStudent",
        element: <SearchStudentPage />,
      },
      {
        path: "/:stdId",
        element: <StudentPage />,
      },
    ],
  },
]);
