import './App.css';
import {
  BrowserRouter
  ,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from './components/Home/Navbar/Navbar';
import Home from './components/Home/Home/Home';
import Registration from './components/Home/Registration/Registration';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>
        <Routes>
          <Route path="/registration" element={<Registration/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
