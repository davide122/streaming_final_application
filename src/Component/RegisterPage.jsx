import { useState } from "react";
import Alert from 'react-bootstrap/Alert';

import { Link,Navigate   } from "react-router-dom";
const RegisterPage = () =>{
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
  
    const [username, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [registrationCompleted, setRegistrationCompleted] = useState(false); 
    const handleNameChange = (event) => {
        setName(event.target.value);
      };
    
      const handleLastNameChange = (event) => {
        setLastName(event.target.value);
      };
    
      const handleUserNameChange = (event) => {
        setUserName(event.target.value);
      };
    
      const handleEmailChange = (event) => {
        setEmail(event.target.value);
      };
    
      const handlePasswordChange = (event) => {
        setPassword(event.target.value);
      };
    
      const handleSubmit = async (event) => {
        event.preventDefault();
        const newUser = {
            name: name,
            lastName: lastName,
            username: username,
            email: email,
            password: password,
          };
      
        try {
          const response = await fetch("http://localhost:8080/api/auth/signup", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(newUser),
          });
    
          if (response.ok) {
            const data = await response.json();
            console.log(data);
            alert("Registered with success!");
            setName("");
            setEmail("");
            setPassword("");
            setUserName("");
            setLastName("");
            setRegistrationCompleted(true);
            
       
          } else {
            console.log("Error occurred with the request");
            alert("Username or password wrong!");
          }
        } catch (error) {
          console.log("Generic error occurred", error);
         
        }
    
        
      };

    return(
        <>
<div className="d-flex justify-content-center align-items-center vh-100 ">
<div className="container-login mx-2 text-light rounded-3">
<h1 className="text-center my-3">Registrazione</h1>
<div className="d-flex justify-content-center align-items-center flex-column ">
   

              <input
                type="text"
                name=""
                value={name}
                onChange={handleNameChange}
                required
                className="Input  mb-2"
                placeholder="Insert name"
              />
           
           
        
              <input
                type="text"
                name=""
                value={lastName}
                onChange={handleLastNameChange}
                required
                placeholder="Insert Last Name"
                className="Input   mb-2"
              />
            
            
           
              <input
                type="text"
                name=""
                value={username}
                onChange={handleUserNameChange}
                required
                placeholder="Insert Username"
                className="Input   mb-2"
              />
             
           
           
              <input
                type="email"
                name=""
                value={email}
                onChange={handleEmailChange}
                required   
                className="Input   mb-2"
                placeholder="Insert email address"
              />
             
            
          
              <input
                type="password"
                name=""
                value={password}
                onChange={handlePasswordChange}
                required
                className="Input "
                placeholder="Insert password"
              />
              

  <button className="MyBtn text-light mt-3 mb-2 rounded-3" onClick={handleSubmit}>Registrati</button>
  <p>già registrato? 
    
    <Link to={"/"}> accedi</Link>
    
     </p>

</div>
</div>
</div>
        </>
       
     
    )
}

export default RegisterPage