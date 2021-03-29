import "./Register.css"


const Register = () => {
    
    return(
        <div className="nav-register">
        <h1 className="reg-title">Sign Up NOW!</h1>
        <p className="reg-description">Do not have an account?<br></br> Make a pact with us providing Your data, which You can make sure that we will protect and not share with 3rd parties!<br></br>Register now and begin your konquest</p>
        <img  src="https://i.redd.it/fzunfh2r7hj21.png"/>
        <form>
            <label htmlFor="username">Username</label>
            <input type="text" name="username" id=""/>
            <label htmlFor="password">Password</label>
            <input type="text" name="password" id=""/>
            <label htmlFor="repeatPassword">Repeat Password</label>
            <input type="password" name="repeatPassword" id="loginPassword"/>

            <input type="submit" value="Sign Up"/>
            
        </form>

        </div>
    );
}

export default Register;