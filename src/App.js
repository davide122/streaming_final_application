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
import Info from './Component/Infopage';
import { getIsAdmin } from './Store';
import { useSelector } from 'react-redux';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

function App() {
  const [islogged, setislogged] = useState(false);
  const isAdmin = useSelector(getIsAdmin);
  // Funzione per impostare lo stato del login

  // Funzione per impostare lo stato del logout

  return (
    <BrowserRouter>
<MyNav></MyNav>
      <TransitionGroup>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/home" element={<MyHomePageWithTransition />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="details/:id" element={<FilmDetails />} />
          {isAdmin && <Route path="backoffice" element={<BackOffice />} />}
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/moviesfound" element={<MoviesFound />} />
          <Route path="/info" element={<Info />} />
        </Routes>
      </TransitionGroup>
    </BrowserRouter>
  );
}

function MyHomePageWithTransition() {
  return (
    <CSSTransition
      in={true} // Cambia questo valore in base alla logica in cui desideri mostrare o nascondere il componente
      classNames="fade"
      timeout={500}
      unmountOnExit
    >
      <MyHomePage />
    </CSSTransition>
  );
}

export default App;
