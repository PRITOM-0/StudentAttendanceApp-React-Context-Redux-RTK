import "./App.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Router/router";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 via-purple-50 to-indigo-50">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
