import { createBrowserHistory } from 'history';
import { Route, Routes, Navigate } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Tickets from './pages/tickets/Tickets';
import AppStore from './store/store';

function App() {

  const token = AppStore.token;

  if(!token) {
    return(
      <Layout>
        <Routes>
          <Route path='/login'element={<Login/>}/>
          <Route path='/register'element={<Register/>}/>
          <Route path='*' element={<Navigate replace to="/login"/>}/>
        </Routes>
      </Layout>
    );
  }

  return (
    <Routes>
      <Route path='/'element={<Tickets/>}/>
    </Routes>
  )
}

export default App