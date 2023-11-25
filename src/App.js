//App.js
import './App.css';
import Main from './Main/Main';
import Login from './Main/Login';
import Signup from './Main/Signup';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './Home';
import Reels from './components/Reels';
import Explore from './components/Explore';
import Messages from './components/Messages';
import Profile from './components/Profile';

import Search from './components/Search';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';




function App() {
  return (
    <div className="App">
      <BrowserRouter>
          
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/home" element={<Home/>} />
        <Route path="/search" element={<Search/>} />
        <Route path="/reels" element={<Reels/>} />
        <Route path="/explore" element={<Explore/>} />
        <Route path="/messages" element={<Messages/>} />
        <Route path="/profile" element={<Profile/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;