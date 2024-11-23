import React from "react"
import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import RegisterPage from './pages/RegisterPage/index'
import LoginPage from "./pages/LoginPage"
const App=()=>{
  return(
    <Router>
      <Routes>
        <Route path='/' element={<RegisterPage />}/>
        <Route path='/login' element={<LoginPage />}/>
      </Routes>
    </Router>
  )
}
export default App;