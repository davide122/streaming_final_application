import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNav from './Component/MyNav';
import LoginPage from './Component/LoginPage';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import RegisterPage from './Component/RegisterPage';
import MyHomePage from './Component/MyHomePage';
import { useEffect, useState } from 'react';
import PageNotFound from './Component/PageNotFound';
import FilmDetails from './Component/FilmDetails';
import BackOffice from './Component/BackOffice';
import Quiz from './Component/Quiz';
import MoviesFound from './Component/MoviesFound';





function App() {
  const [islogged, setislogged]= useState(false);
  
  // Funzione per impostare lo stato del login
 

  // Funzione per impostare lo stato del logout
  
  return (

<BrowserRouter>


<Routes>
<Route path='/' element={<LoginPage></LoginPage>}></Route>


<Route path="/home" element={<MyHomePage></MyHomePage>}></Route>

<Route path='/register' element={<RegisterPage></RegisterPage>}></Route>
<Route path='*' element={<PageNotFound></PageNotFound>}></Route>
<Route path='details/:id' element={<FilmDetails/>}></Route>
<Route path='backoffice' element={<BackOffice></BackOffice>}></Route>
<Route path='/quiz' element={<Quiz></Quiz>}></Route>
<Route path="/moviesfound" element={<MoviesFound></MoviesFound>}></Route>
</Routes>
</BrowserRouter>
  );
}

export default App;
