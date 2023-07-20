import { useEffect, useState } from "react";
import { Link,Navigate, useNavigate, useNavigation   } from "react-router-dom";
import MyHomePage from "./MyHomePage";
import { SetUser } from "../Store";
import { useDispatch } from "react-redux";


const LoginPage = () =>{
  const Dispatch=useDispatch()
   const navigation = useNavigate();
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [responseText, setResponseText] = useState("");
    const[islogged, setislogged] = useState(false);
    const [showPassword, setShowPassword] = useState(false);


useEffect(()=>{
islogged&&navigation("/home")

},[islogged])





    const handleUserNameChange = (event) => {
        setUserName(event.target.value);
      };
    
      const handlePasswordChange = (event) => {
        setPassword(event.target.value);
      };
    
      const handleSubmit = async (event) => {
        event.preventDefault();
    
        const User = {
          username: username,
          password: password,

        };
        

        try {
          const response = await fetch("http://localhost:8080/api/auth/signin", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(User),
          });
    
          if (response.ok) {
            const data = await response.json();
            console.log(data);
            Dispatch(SetUser(data))
            setResponseText(data);
          
            
localStorage.setItem("username", data.username);
localStorage.setItem("token", data.accessToken);
  setislogged(true);
          } else {
            console.log("Error occurred with the request");
            alert("Username or password wrong!");
          }
        } catch (error) {
          console.log("Generic error occurred", error);
          alert(error);
        }
    
        
      };

    return(
  
 localStorage.getItem("token")?(<MyHomePage></MyHomePage>):(
<div className="d-flex justify-content-center align-items-center vh-100">
<div className="container-login mx-2 text-light rounded-3">
<h1 className="text-center my-3">Accedi</h1>
<div className="d-flex justify-content-center align-items-center flex-column ">
   <form onSubmit={handleSubmit}></form>
        <input
        placeholder="Insert Username"
         type="text" 
         name=""
         value={username}
         onChange={handleUserNameChange}
         required
         className=" Input "/>
<div>
  
</div>
        <input type={showPassword ? 'text' : 'password'}
        placeholder="insert password"
        name=""
        value={password}
onChange={handlePasswordChange}

required
         className="Input my-4 "/>
           <label>
              <input
                type="checkbox"
                checked={showPassword}
                onChange={() => setShowPassword(!showPassword)}
              />{" "}
              Show Password
            </label>
  <button className="MyBtn text-light mt-3 mb-2 rounded-3" onClick={handleSubmit}>Accedi</button>
  <span>Prima volta su Streamthron? <Link to={"/register"}> Registrati</Link> </span>
  <p>sapevi che su Streamthron puoi utilizzare l'intelligenza artificiale?<Link to={"/info"} className="text-warning"> info</Link> </p>
</div>
</div>
</div>

 )
      
      
    )
    
}
export default LoginPage;