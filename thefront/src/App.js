import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Onboarding from './Onboarding/Onboarding';

//import MessagePage from './Messaging/MessagePage';
import SearchPage from './Search/SearchPage';
import LoginPage from './Login/LoginPage';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/search" element={<SearchPage />} />
      </Routes>
    </Router>
    
  );
}

export default App;
