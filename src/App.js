import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNav from './Component/MyNav';
import LoginPage from './Component/LoginPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';




function App() {
  return (

<BrowserRouter>

<Routes>
<Route path='/' element={<LoginPage></LoginPage>}></Route>
<Route path="/home" element={<MyNav></MyNav>}></Route> 
</Routes>
</BrowserRouter>
  );
}

export default App;
