import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUp from './Onboarding/SignUp'
import Home from './Home/Home';
import LandingPage from './Landing/LandingPage';
import MessagePage from './Messaging/MessagePage';
import SearchPage from './Search/SearchPage';
import LoginPage from './Login/LoginPage';
import About from './Landing/About'
import CreateAccount from './Onboarding/CreateAccount';
import WebApp from './WebApp/WebApp';
import CreateMentor from './Onboarding/CreateMentor';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/email-sign-up" element={<CreateAccount />} />
        <Route path="/mentor-sign-up" element={<CreateMentor />} />
        <Route path='/webapp' element={<WebApp />} >
          <Route path="search" element={<SearchPage />} />
          <Route path="message" element={<MessagePage />} />
          <Route path="home" element={<Home />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
