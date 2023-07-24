import { useSelector } from "react-redux";

import MyNav from "./MyNav"
import { getUserData } from "../Store";
import MyCarousel from "./MyCarousel";
import MyHeroVideo from "./MyHeroVideo";
import Closedemo from "./closedemo"
import MyFooter from "./MyFooter";
import { CSSTransition } from "react-transition-group";
const MyHomePage = () =>{
    const user = useSelector(getUserData)
    console.log(user)
    return (
        <CSSTransition
          in={true} // Cambia questo valore in base alla logica in cui desideri mostrare o nascondere il componente
          classNames="fade-enter"
          timeout={500}
          unmountOnExit
        >
          <div>
            <MyNav />
            <MyHeroVideo />
            <MyCarousel />
            <Closedemo />
            <MyFooter />
          </div>
        </CSSTransition>
      );
}

export default MyHomePage;