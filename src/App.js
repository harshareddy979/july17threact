import logo from './logo.svg';
import './App.css';
import SecondComponent from './secondComponent';
import RegisterPage from './components/register';
import { Link, useNavigate } from 'react-router-dom';
import NavBar from './components/NavBar';

function App() {
  const navigate=useNavigate()
  return (
    <div>
      <NavBar/>
    <div className="App">
        <h1>Main Page</h1>
        <button onClick={()=>{navigate("/register")}}>Register</button>
        <button onClick={()=>{navigate("/login")}}>Login</button>
        <Link to="/register">Register</Link>
        <Link to="/login">login</Link>
        {/* <RegisterPage/> */}
        {/* <SecondComponent/> */}
    </div>
    </div>
  );
}

export default App;
