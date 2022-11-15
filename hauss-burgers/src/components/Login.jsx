
function Login(){
    return (
        <div id= "login-container">
         <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Sedgwick+Ave&display=swap" rel="stylesheet"/>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Oswald&family=Sedgwick+Ave&display=swap" rel="stylesheet"/>
        <img alt= "flag-color" src= "img/flag-colors.png" class= "flag-colors"/>
        <img alt= "hauss-logo" src= "img/logo-hauss.png" class= "hauss-logo" />
        <h2 class= "login-text">Login</h2>
       <div class= "login-access" >
            <label for= "user" class= "user-name">USER</label>
            <input type= "text" id= "user"/>
            <label for= "password">PASSWORD</label>
            <input type= "text" id= "password"/>
          
       </div>
       <div>
       <button type= "button">Entry</button>
       <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-flame" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M12 12c2 -2.96 0 -7 -1 -8c0 3.038 -1.773 4.741 -3 6c-1.226 1.26 -2 3.24 -2 5a6 6 0 1 0 12 0c0 -1.532 -1.056 -3.94 -2 -5c-1.786 3 -2.791 3 -4 2z" />
</svg>
       </div>
     
        
        <img alt= "burger-login" src= "img/burger-login.png"/>
        <p>Fast and delicious...</p>
        <p>Our hamburgers are the best</p>
        
    </div>
    ) 
}
export default Login