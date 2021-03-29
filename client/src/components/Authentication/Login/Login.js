import "./Login.css"
import gateImg from "../../../images/mk_gate.jpg"

const Login = () => {


    function onLoginAttempt(e){
        e.preventDefault();
        
        const {username, password} = e.target;

        

        console.log(username.value, password.value);

    }

    return(
        <div className="nav-login">
        <h1>Log into our realm and begin your journey!</h1>
        <img src={gateImg} alt="gateImg"/>
        
        <form onSubmit={onLoginAttempt}>
            <label htmlFor="username">Username</label>
            <input type="text" name="username" id="loginUsername"/>
            <label htmlFor="username">Password</label>
            <input type="password" name="password" id="loginPassword"/>
            <input type="submit" value="Login"/>
        </form>

        </div>
    )
    
}

export default Login;

