import {Component} from '@angular/core';
import { Login } from './Login';

@Component({
    selector: 'login',
    templateUrl: 'app/login/login.component.html'
})
export class LoginComponent {

    login = new Login();
    
    onSubmit() {
        if (this.login.userName === "admin" && this.login.password === "admin")
            alert("Login Successful");
        else
            alert("Invalid Login!!! Please try again...");
    }
}
