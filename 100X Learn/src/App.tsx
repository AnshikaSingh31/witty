import { BrowserRouter, Route,Routes } from "react-router-dom";
import Login from "./pages/login";
import Register from "./pages/auth/register";


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path ="/" element={<Register/>} />
      <Route path ="/login" element={<Login/>} />
      
    </Routes>
    </BrowserRouter>
  )
}

export default App