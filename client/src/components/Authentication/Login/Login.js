import "./Login.css"

const Login = () => {

    return(
        <div className="nav-login">
        <img  src="https://i.pinimg.com/474x/76/f3/75/76f3758415130adfdd6eebfe855c9430.jpg"/>
       
        <form>
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

