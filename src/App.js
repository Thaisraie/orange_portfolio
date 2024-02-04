import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom';
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import MyProjects from "./pages/MyProjects";
import Discovery from "./pages/Discovery";
import PageNotFound from './pages/PageNotFound';

function App() {

  const isAuthenticated = () => {
    const token = localStorage.getItem("usersToken");
    if (token) {
        return true;
    } else {
        return false;
    }
}

const PrivateRoute = ({ component: Component }) => {
  return isAuthenticated ? <Component /> : <Login/>
}

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' exact element={<Login/>}/>
        <Route path="/login" exact element={<Login />} />
        <Route path='/signup' element={<SignUp/>}/>
        <Route index path='/myprojects' element={<PrivateRoute component={MyProjects}/>}/>
        <Route path="/discovery" element={<PrivateRoute component={Discovery}/>}/>
        <Route path='*' exact element={<PageNotFound/>} />  
      </Routes>
    </BrowserRouter>
  );
}

export default App;
