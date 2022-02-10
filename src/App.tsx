import { createBrowserHistory } from 'history';
import { Route, Routes, Navigate } from 'react-router-dom';
import Login from './pages/login/Login';
import Tickets from './pages/tickets/Tickets';
import AppStore from './store/store';

function App() {

  const token = AppStore.token;

  if(!token) {
    return(
      <Routes>
        <Route path='/login'element={<Login/>}/>
        <Route path='*' element={<Navigate replace to="/login"/>}/>
      </Routes>
    );
  }

  return (
    <Routes>
      <Route path='/'element={<Tickets/>}/>
    </Routes>
  )
}

export default App