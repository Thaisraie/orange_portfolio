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
import { AuthLogin, AuthSignUp, PrivateRoute } from './routes'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' exact element={<AuthLogin><Login/></AuthLogin>}/>
        <Route path="/login" exact element={<AuthLogin><Login/></AuthLogin>} />
        <Route path='/signup' element={<AuthSignUp><SignUp/></AuthSignUp>}/>
        <Route index path='/myprojects' element={<PrivateRoute><MyProjects/></PrivateRoute>}/>
        <Route path="/discovery" element={<PrivateRoute><Discovery/></PrivateRoute>}/>
        <Route path='*' exact element={<PageNotFound/>} />  
      </Routes>
    </BrowserRouter>
  );
}

export default App;
