import { useSelector } from "react-redux";

import MyNav from "./MyNav"
import { getUserData } from "../Store";
import MyCarousel from "./MyCarousel";
import MyHeroVideo from "./MyHeroVideo";

const MyHomePage = () =>{
    const user = useSelector(getUserData)
    console.log(user)
    return(
<div>
       <MyNav>
        
       </MyNav>

       <MyHeroVideo></MyHeroVideo>
       <MyCarousel></MyCarousel>

</div>
 

    )
}

export default MyHomePage;