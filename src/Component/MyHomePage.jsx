import { useSelector } from "react-redux";

import MyNav from "./MyNav"
import { getUserData } from "../Store";
import MyCarousel from "./MyCarousel";
import MyHeroVideo from "./MyHeroVideo";
import Closedemo from "./closedemo"
const MyHomePage = () =>{
    const user = useSelector(getUserData)
    console.log(user)
    return(
<div>
       
<MyNav></MyNav>
       <MyHeroVideo></MyHeroVideo>
       <MyCarousel></MyCarousel>
<Closedemo></Closedemo>
</div>
 

    )
}

export default MyHomePage;