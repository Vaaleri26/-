
import React from "react";


class SignInPage extends React.Component {
    register() {
      const login = document.getElementById("login");
      const email = document.getElementById("email");
      const password = document.getElementById("password");
  
      localStorage.setItem("login", login.value);
      localStorage.setItem("email", email.value);
      localStorage.setItem("password", password.value);
      localStorage.setItem("registered", true);
    }
  
    render() {
        return (
            <div className="form">
                <form action=""> 
                    <input type="text" name ="login" id="login" placeholder="Введите логин"/>
                    <input type="text" name ="email" id="email" placeholder="Введите почту"/>
                     <input type="password"  name ="password" id="password" placeholder="Введите пароль"/>
                     <button onClick={() => this.register()}>Зарегистрироваться</button>
                </form>
         </div>
    );
  }
}
export default SignInPage;