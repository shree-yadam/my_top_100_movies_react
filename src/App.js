import './App.css';
import Login from './components/Login';
import Register from './components/Register';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import NavHeader from './components/NavHeader';
import Dashboard from './components/Dashboard';
//import { Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <NavHeader />
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/" element={<Dashboard />} />
     </Routes>
    </BrowserRouter>
  );
}

export default App;
