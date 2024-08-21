import React from 'react';
import logo from './logo.svg';
import './App.css';
import {LoginScreen,Users,UserDetails,AddEditUser,AboutPage,Company,Employee,Home,Service,Contact} from './components/screens/'
import { Routes,Route } from 'react-router-dom';
import { AuthConsumer } from './context/auth';
import {HeaderBar} from './layouts';
import {ProtectedRoute  } from './permission/PermissionGaurd';


function App() {
  const authConsumer = AuthConsumer();
  return (
    <div>
       {authConsumer!=null && authConsumer.user?<HeaderBar/>:""}
      <div className="container">
        <div className='my-4'>
          <Routes>
            <Route path="/" element={<LoginScreen />} />
            <Route path="user" element={<Users />} />
            <Route path="user/:id" element={<UserDetails />} />
            <Route path="edit-user/:id" element={<AddEditUser />} />
            <Route path="home" element={<Home />} />
            <Route path="service" element={<Service />} />
            <Route path="contact" element={<Contact />} />
            <Route
              path="about"
              element={<ProtectedRoute requiredPermissions={["view-aboutus"]}>
                <AboutPage />
              </ProtectedRoute>
              }>
                 <Route path="company" element={<Company />} />
                <Route path="employee" element={<Employee />} />
            </Route>
          
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
