import React from 'react';
import App from './App';
const Login = (props)=>{
    const {
        email,
        setEmail,
        password,
        setPassword,
        handleLogin,
        handleSignup,
        hasAccount,
        setHasAccount,
        emailError,
        passwordError
             }=props;
    return(
        <section className="login">
        <div className='loginContainer'>
            <label>UserName</label>
            <input type="text" autoFocus required value={email} onChange={(e)=> setEmail(e.target.value)}/>
         <p className="errorMsg">{emailError}</p>
         <label>password</label>
         <input type="password" required value={password} onChange={(e)=>setPassword(e.target.value)}/>
          <p className="errorMsg">{passwordError}</p>   
        
        <div className="btnContainer">
           {hasAccount ? (
               <>
                <button onClick={handleLogin}>Sign in</button>
                 <p>Don't have a n account<span onClick={()=>setHasAccount(!hasAccount)}>Sign Up</span></p>
               </>
           ):(
               <>
                 <button onClick={handleSignup}>Sign Up</button>
                 <p>If You have an account already? <span onClick={()=>setHasAccount(!hasAccount)}>Sign in</span></p>
               </>
           )}           
            </div> 
            </div>
        </section>
         
    );
};

export default Login;