import "./Register.css"


const Register = () => {
    
    return(
        <div className="nav-register">
        <img  src="https://www.legalzoom.com/sites/lz.com/files/articles/how_to_register_a_business.jpg"/>
       
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