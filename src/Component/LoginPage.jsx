import { useState } from "react";
import { Link,Navigate   } from "react-router-dom";


const LoginPage = () =>{
   
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [responseText, setResponseText] = useState("");
    const[islogged, setislogged] = useState(false);
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
        
  if (islogged) {
    
  }
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
            setResponseText(data);
            setislogged(true);
            return <Navigate to="/login" />;

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
<div className="d-flex justify-content-center align-items-center vh-100">
<div className="container-login mx-2 text-light rounded-3">
<h1 className="text-center my-3">Accedi</h1>
<div className="d-flex justify-content-center align-items-center flex-column ">
   
        <input
         type="text" 
         name=""
         value={username}
         onChange={handleUserNameChange}
         required
         className=" Input rounded-3"/>

        <input type="password"
        name=""
        value={password}
onChange={handlePasswordChange}
required
         className="Input my-4 rounded-3"/>

  <button className="MyBtn text-light mt-3 mb-2 rounded-3" onClick={handleSubmit}>Accedi</button>
  <p>Prima volta su Streamthron? <Link to={"/pagina"}></Link> </p>

</div>
</div>
</div>
      
      
    )
    
}
export default LoginPage;