import React,{useEffect,useState} from 'react';
import reactDom from 'react-dom';
import { useDispatch } from 'react-redux';
import './login.css';
import {login} from '../../services/actions/login'

function Login(props){
    
    let [showRegistration,setshowRegistration] = useState(false);
    let [showForgotPassword,setShowForgotPassword] = useState(false);
    const  [name,setName] = useState("");
    const  [password,setPassword] = useState(""); 
    const dispatch = useDispatch();
    const loginHandler = (e) => {
        e.preventDefault();
       let data = {name:name,password:password} 
       dispatch(login(data));
    }
    return(
        <>
    <div id="logreg-forms">
    { !showRegistration ? 
        <form className="form-signin" onSubmit={(e)=> loginHandler(e) }>
            
            <h1 className="h3 mb-3 font-weight-normal" style={{textAlign : 'center'}} > Sign in</h1>
            <div className="social-login">
                <button className="btn facebook-btn social-btn" type="button"><span><i className="fab fa-facebook-f"></i> Sign in with Facebook</span> </button>
                <button className="btn google-btn social-btn" type="button"><span><i className="fab fa-google-plus-g"></i> Sign in with Google+</span> </button>
            </div>
            <p style={{textAlign : 'center'}}> OR  </p>
            <input type="email" className="form-control" placeholder="Email address"  onChange={(e)=> setName(e.target.value)} value={name}/>
            <input type="password" className="form-control" placeholder="Password" onChange={(e)=> setPassword(e.target.value)} value={password}/>
            
            <button className="btn btn-success btn-block" type="submit" ><i className="fas fa-sign-in-alt"></i> Sign in</button>
            <a href="#" id="forgot_pswd" onClick={()=>setShowForgotPassword(!showForgotPassword)}>Forgot password?</a>
            <hr>
            </hr>
            { showForgotPassword ? 
            <div className="resetPassword" >
                <input type="email" id="resetEmail" className="form-control" placeholder="Email address" required="" />
                <button className="btn btn-primary btn-block" type="submit">Reset Password</button>
            </div> 
            : null}
           
            
        </form>  : null 
        }
        <button onClick={()=>setshowRegistration(!showRegistration)} className="btn btn-primary btn-block" type="button" ><i className="fas fa-user-plus" ></i> Sign up New Account</button>
         { showRegistration ? 
        <form  className="form-signup">
            <div className="social-login">
                <button className="btn facebook-btn social-btn" type="button"><span><i className="fab fa-facebook-f"></i> Sign up with Facebook</span> </button>
            </div>
            <div className="social-login">
                <button className="btn google-btn social-btn" type="button"><span><i className="fab fa-google-plus-g"></i> Sign up with Google+</span> </button>
            </div>
            
            <p style={{textAlign : 'center'}}>OR</p>

            <input type="text" id="user-name" className="form-control" placeholder="Full name" required="" />
            <input type="email" id="user-email" className="form-control" placeholder="Email address" required />
            <input type="password" id="user-pass" className="form-control" placeholder="Password" required />
            <input type="password" id="user-repeatpass" className="form-control" placeholder="Repeat Password" required />

            <button className="btn btn-primary btn-block" type="submit"><i className="fas fa-user-plus"></i> Sign Up</button>
           
        </form>
        : null }
            <br/>
    </div>
        </>
    )
}

export default Login;