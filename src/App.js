import {
  BrowserRouter,
  Route,
  Routes
} from 'react-router-dom';
import ScreenLogin from "./pages/ScreenLogin";
import ScreenRegister from "./pages/ScreenRegister";
import ScreenSuccessRegister from "./pages/ScreenSuccessRegister";
import ScreenPortfolio from "./pages/ScreenPortfolio";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<ScreenLogin/>}/>
        <Route path='/register' element={<ScreenRegister/>}/>
        <Route path='/success-register' element={<ScreenSuccessRegister/>}/>
        <Route path="/portfolio" element={<ScreenPortfolio/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
