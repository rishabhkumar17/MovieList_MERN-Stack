import './App.css';
import { Routes, Route } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Movies from './components/Movies';
import RegisteredUsers from './components/RegisteredUsers';

export const config = {
  endpoint: `http://localhost:8082/api/v1`,
};

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Movies" element={<Movies />} />
        <Route path="/RegisteredUsers" element={<RegisteredUsers />} />
      </Routes>
    </div>
  );
}

export default App;
