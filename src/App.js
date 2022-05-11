import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Layout from './components/Layout';
import Login from './components/Login';
import RequireAuth from './components/RequireAuth';
import Unauthorized from './components/Unauthorized';
import { ROLE } from './constants/ROLE';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        {/* Public Routes */}
        <Route path='/' element={<Home />} />
        <Route path='login' element={<Login />} />  
        <Route path="/unauthorized" element={<Unauthorized />} />

        {/* Protected Routes */}
        <Route element={<RequireAuth allowedRoles={[ROLE.USER, ROLE.ADMIN, ROLE.EDITOR]} />}>
          <Route path='user' element={<h1>Available to any User</h1>} />
        </Route>

        <Route element={<RequireAuth allowedRoles={[ROLE.EDITOR]} />}>
          <Route path='editor' element={<h1>Only available to Editor</h1>} />
        </Route>
        
        <Route element={<RequireAuth allowedRoles={[ROLE.ADMIN]} />}>
          <Route path='admin' element={<h1>Only available to Admin</h1>} />
        </Route>
        
        <Route element={<RequireAuth allowedRoles={[ROLE.EDITOR, ROLE.ADMIN]} />}>
          <Route path='lounge' element={<h1>Only available to Admin and Editor</h1>} />
        </Route>

        {/* Catch All */}
        <Route path='*' element={<h1>Page not found</h1>} />
      </Route>
    </Routes>
  );
}

export default App;
