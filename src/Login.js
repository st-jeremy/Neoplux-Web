
const Login = () => {

    return ( 
        <div className="Login">
            <div>
                <h2>Admin Login</h2>
                <br />

                <form>
                    <label> Enter Email:</label>
                    <input type="email" name="email" id="email" />
                    <br />

                    <label>Password:</label>
                    <input type="password" name="Password" id="password" />

                    <br />
                    <label>Forgot Password?</label>
                    <a href="http://forgotpassword.com">Click Here
                    </a>

                    <input type="submit" value="Submit" />
                </form>

            </div>


        </div>
     );
}
 
export default Login;
