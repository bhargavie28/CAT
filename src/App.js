import './App.css';
import LoginForm from '../src/components/LoginForm';
import AdminRoles from '../src/components/AdminRoles';
import Drawer from './components/Drawer/Drawer';
import LandingPage from './pages/LandingPage';
import CreateNewRoleForm from './components/CreateNewRoleForm.js';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
function App() {
  return (
    <>
    <Router>
    <Drawer />
      <Routes>
      <Route exact path='/login' element={<LoginForm />}/>
      <Route exact path='/adminRoles' element={<AdminRoles/>}/>
      <Route exact path='/createRole' element={<CreateNewRoleForm/>}/>

      </Routes>
    </Router>
    </>
  );
}

export default App;
