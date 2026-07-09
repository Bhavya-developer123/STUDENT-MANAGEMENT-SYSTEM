import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Students from "./pages/Student";
import AddStudent from "./pages/AddStudent";
import EditStudent from "./pages/EditStudent";
import NotFound from "./pages/PageNotFound";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      {/* Navbar must sit OUTSIDE of Routes so it renders on every page */}
      <Navbar /> 
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/students" element={<Students />} />
        <Route path="/add-student" element={<AddStudent />} />
        <Route path="/edit-student/:id" element={<EditStudent />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;