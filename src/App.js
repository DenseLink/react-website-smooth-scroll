import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages';
import SignIn from './pages/signin';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} exact />
        <Route path='/signin' element={<SignIn />} exact />
      </Routes>
    </Router>
  );
}

export default App;
//tutorial here: https://www.youtube.com/watch?v=Nl54MJDR2p8