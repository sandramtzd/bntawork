import { useState } from "react";

// Controlled form. 
const Register = ({ users, addNewUser }) => {

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleValidation = () => {
    let failedValidation = false;


    //We would make an API to call to check if email/username exists
    if (users.some((user) => user.username === username || user.email === email)){
      failedValidation = true;
      setError("User already exists")
    }

    // password must confirm the other
    if ( password !== confirmPassword){
      failedValidation = true;
      setError("Passwords don't match")
    }
  // no fields empty
    if(username === "" || email === "" || password === ""){
      failedValidation = true;
      setError("Please don't leave fields empty")
    }

    return failedValidation;
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    // handle validation

    if(!handleValidation()){
      const newUser = {
        username: username,
        email: email,
        password: password
      };
      addNewUser(newUser);
      setUsername("");
      setEmail("");  
      setPassword("");  
      setConfirmPassword("");
      setError("");  

    }


    // custom function to handle the validation
    // create a new user
    // send up the new user to the container

  }


  return (
    <>
      <h2>Sign Up</h2>
      <p>{error}</p>

      <form onSubmit={handleSubmit}>
        <input 
          type = "text"
          name = "username"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value) }        
        />
        <input 
          type = "email"
          name = "email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value) }        
        />
        <input 
          type = "password" // attribute
          name = "password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value) }        
        />
        <input 
          type = "password"
          name = "confirmPassword"
          placeholder="Confirm your password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value) }        
        />

        <input 
          type = "submit"
          value = "Register"
        />



      </form>

  
    </>);
};

export default Register;
