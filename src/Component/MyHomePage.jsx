import { useSelector } from "react-redux";
import MyHeroVideo from "./MyHeroVideo";
import MyNav from "./MyNav"
import { getUserData } from "../Store";
import MyCarousel from "./MyCarousel";

const MyHomePage = () =>{
    const user = useSelector(getUserData)
    console.log(user)
    return(
<div>
       <MyNav>
        
       </MyNav>
       <MyHeroVideo>
        
       </MyHeroVideo>
       
       <MyCarousel></MyCarousel>
       
       <MyCarousel></MyCarousel>
       <MyCarousel></MyCarousel>
</div>
 

    )
}

export default MyHomePage;