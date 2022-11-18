import { Link } from 'react-router-dom';
//import { validateUser } from '../axios.js'

function Login() {
    //Obtener los datos del usuario
    return (
        <div id="login-container">
            <link href="./login.css" rel="stylesheet" />
            <img alt="flag-color" src="img/flag-colors.png" className="flag-colors" />
            <img alt="hauss-logo" src="img/logo-hauss.png" className="hauss-logo" />
            <h2 className="login-text">LogIn</h2>
            <div className="login-access" >
                <label htmlFor="user" className="user-name">USER</label>
                <input type="text" id="user" />
                <label htmlFor="password" className="password">PASSWORD</label>
                <input type="password" id="password" />
                <Link to='/waiters' className="login-buttom">
                    <p className='button-Entry'>Entry</p>
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-flame" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M12 12c2 -2.96 0 -7 -1 -8c0 3.038 -1.773 4.741 -3 6c-1.226 1.26 -2 3.24 -2 5a6 6 0 1 0 12 0c0 -1.532 -1.056 -3.94 -2 -5c-1.786 3 -2.791 3 -4 2z" />
                    </svg>
                </Link>
            </div>
            <img alt="burger-login" src="img/hamburger_logIn-3.png" id="burger-imageTablet" />
        </div>
        
    )
}
export default Login