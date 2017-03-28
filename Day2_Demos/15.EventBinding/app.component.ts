import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: ` 
      
        <form  >
    <label >User Name</label>
 <input type="text" #name>
  <label for="password" >Password</label>
  <input type="password" name="password" #password>
   </form>
   <button (click) ="onSubmit(name.value,password.value)">Login</button>
                               
                        
       
    `
})
export class AppComponent {
    onSubmit(name: string, password: string) {

        if (name === "admin" && password === "admin")
            alert("Login Successful");
        else
            alert("Invalid Login!!! Please try again...");
    }
}






