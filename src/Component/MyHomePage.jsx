import { useSelector } from "react-redux";

import MyNav from "./MyNav"
import { getUserData } from "../Store";
import MyCarousel from "./MyCarousel";
import MyHeroVideo from "./MyHeroVideo";
import Closedemo from "./closedemo"
import MyFooter from "./MyFooter";
const MyHomePage = () =>{
    const user = useSelector(getUserData)
    console.log(user)
    return(
<div>
       
<MyNav></MyNav>
       <MyHeroVideo></MyHeroVideo>
       <MyCarousel></MyCarousel>
<Closedemo></Closedemo>
<MyFooter></MyFooter>
</div>
 

    )
}

export default MyHomePage;