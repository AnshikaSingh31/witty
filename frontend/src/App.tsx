import { BrowserRouter, Route,Routes } from "react-router-dom";
import Login from "./pages/login";
import Register from "./pages/auth/register";
import ProtectedRoute from "./components/protectedRoute";
import Subjects from "./pages/auth/student/subject";
import SubjectDetail from "./pages/auth/student/subjectDetail";


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path ="/" element={<Register/>} />
      <Route path ="/login" element={<Login/>} />

      {/*student Route*/}
      <Route path ="/subjects" element={
        <ProtectedRoute allowedRole="student">
          <Subjects/>
        </ProtectedRoute>
      }/>
      <Route path="/subject/:id" element={
        <ProtectedRoute allowedRole="student">
          <SubjectDetail/>
        </ProtectedRoute>
      }/>

      {/*admin route */}
      <Route path="/admin" element={
        <ProtectedRoute allowedRole="admin">
          <div className="text-white">Admin Page - coming soon!</div>
        </ProtectedRoute>
      }/>

      {/*404 */}
      <Route path ="*" element={
        <div className="min-h-screen bg-gray-950 flex items-center justufy-center">
          <h1 className="text-white text-2xl">404 - Page not Found</h1>
        </div>
      }/>
      
    </Routes>
    </BrowserRouter>
  )
}

export default App