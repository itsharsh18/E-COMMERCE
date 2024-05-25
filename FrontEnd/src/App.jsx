
import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './App.css'
import './index.css'
// import Layout from './componets/layout/Layout'
import Header from './componets/layout/Header';
import Footer from './componets/layout/Footer';
import HomePage from './pages/HomePage';
import About from './pages/About';
import Contace from './pages/Contace';
import PageNotFound from './pages/PageNotFound';
import Register from './pages/Auth/Register';
import Login from './pages/Auth/Login';
import Dashboard from './pages/USER/Dashboard';
import PrivateRoute from './componets/layout/Routes/PrivateRoute';
import ForgotPassword from './pages/Auth/ForgotPassword';
import AdminPrivate from './componets/layout/Routes/AdminPrivate';
import AdminDashboard from './pages/Admin/AdminDashboard';
import CreateCategory from './pages/Admin/CreateCategory';
import CreateProduct from './pages/Admin/CreateProduct';
import Users from './pages/Admin/Users';
import Order from './pages/USER/Order';
import Profile from './pages/USER/Profile';


function App() {
 return (
    <div>
      <BrowserRouter>
      {/* <Layout> */}
    <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />

      <Route path ="/dashboard" element={<PrivateRoute />} >
          <Route path="user" element={<Dashboard/>} />
          <Route path="user/orders" element={<Order/>} />
          <Route path="user/profile" element={<Profile/>} />

        </Route>

       
      <Route path ="/dashboard" element={<AdminPrivate />} >
          <Route path="admin" element={<AdminDashboard/>} />
          <Route path="admin/create-category" element={<CreateCategory />} />
          <Route path="admin/create-product" element={<CreateProduct />} />
          <Route path="admin/Users" element={<Users />} />


        </Route>


        <Route path="/forgotPassword" element={<ForgotPassword />} />

       <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contace />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/login" element={<Login />} />
  {/* <ToastContainer /> */}
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
     
      {/* </Layout> */}
      <Footer />
      </BrowserRouter>
    </div>
  )
}


export default App
