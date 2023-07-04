import { useSelector } from "react-redux";
import MyHeroVideo from "./MyHeroVideo";
import MyNav from "./MyNav"
import { getUserData } from "../Store";

const MyHomePage = () =>{
    const user = useSelector(getUserData)
    console.log(user)
    return(
<div>
       <MyNav></MyNav>
       <MyHeroVideo></MyHeroVideo>
</div>
 

    )
}

export default MyHomePage;