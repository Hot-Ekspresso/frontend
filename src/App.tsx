import { createBrowserHistory } from 'history';
import { Route, Routes, Navigate } from 'react-router-dom';
import LoginLanding from './components/Landing/LoginLanding';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Tickets from './pages/tickets/Tickets';
import AppStore from './store/store';

function App() {

  const token = AppStore.token;

  if(!token) {
    return(
      <LoginLanding>
        <Routes>
          <Route path='/login'element={<Login/>}/>
          <Route path='/register'element={<Register/>}/>
          <Route path='*' element={<Navigate replace to="/login"/>}/>
        </Routes>
      </LoginLanding>
    );
  }

  return (
    <Routes>
      <Route path='/'element={<Tickets/>}/>
    </Routes>
  )
}

export default App