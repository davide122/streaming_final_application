import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNav from './Component/MyNav';
import LoginPage from './Component/LoginPage';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import RegisterPage from './Component/RegisterPage';
import MyHomePage from './Component/MyHomePage';
import { useState } from 'react';
import PageNotFound from './Component/PageNotFound';





function App() {
  const [islogged, setislogged]= useState(false);
  

  return (

<BrowserRouter>

<Routes>
<Route path='/' element={<LoginPage></LoginPage>}></Route>


<Route path="/home" element={<MyHomePage></MyHomePage>}></Route>

<Route path='/register' element={<RegisterPage></RegisterPage>}></Route>
<Route path='*' element={<PageNotFound></PageNotFound>}></Route>
</Routes>
</BrowserRouter>
  );
}

export default App;
