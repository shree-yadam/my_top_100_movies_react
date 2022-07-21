import './App.css';
import Login from './components/Login';
import Register from './components/Register';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import NavHeader from './components/NavHeader';
//import { Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <NavHeader />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
     </Routes>
    </BrowserRouter>
  );
}

export default App;
