import './App.css';
import { Routes, Route } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Movies from './components/Movies';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Movies" element={<Movies />} />
      </Routes>
    </div>
  );
}

export default App;
