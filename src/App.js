import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginButton from './pages/Login'
import Code from './pages/Code'
import Home from './pages/Home'

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LoginButton />} />
        <Route exact path="/auth" element={<Code />} />
        <Route exact path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
