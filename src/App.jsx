// import { useState } from 'react'
import './App.css'
import Layout from './Components/Layout/Layout'
import Customers from './pages/Customers'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <>
      <div>
        <Layout>
          <Customers />
        </Layout>
      </div>
      <ToastContainer />
    </>
  )
}

export default App
