import {
  BrowserRouter,
  Route,
  Routes
} from 'react-router-dom';
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import MyProjects from "./pages/MyProjects";
import Discovery from "./pages/Discovery";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/myprojects' element={<MyProjects/>}/>
        <Route path="/discovery" element={<Discovery/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
