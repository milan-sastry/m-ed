// npm run dev
// mobile browser:  npm run dev -- --host

import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import './App.css'

import Root from './Root'
import LoginPage from './Login'
import SignUp from './SignUp'
import Home from './Home'
import Workouts from './Workouts'
import Nutrition from './Nutrition'
import Statistics from './Statistics'
import Account from './Account'

function App() {

  return (
    <Router>
      <div className="App">
        <header className="App-header">
        </header>
        <Routes>
          <Route path="/" element={<Root />} />
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/signup" element={<SignUp/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/account" element={<Account/>} />
          <Route path="/workouts" element={<Workouts/>} />
          <Route path="/nutrition" element={<Nutrition/>} />
          <Route path="/statistics" element={<Statistics/>} />

        </Routes>
      </div>
    </Router>
  )
}

export default App
