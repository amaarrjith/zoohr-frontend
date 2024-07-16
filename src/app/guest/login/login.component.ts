import { Component, OnInit } from '@angular/core';
import { GuestservivcesService } from '../guestservivces.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  constructor(private services:GuestservivcesService){}
  login={
    username:'',
    password:'',
  }
  ngOnInit(): void {
    localStorage.clear()
  }
  submit(){
    const LoginForm = new FormData()
    LoginForm.append('username',this.login.username)
    LoginForm.append('password',this.login.password)
    this.services.login(LoginForm).subscribe((response:any)=>{
      console.log(response.admin)
      if(response.admin === true){
        localStorage.setItem('username',this.login.username)
        window.location.href="/adminmaster/adminhome"
      } 
      else if(response.employee === true){
        this.services.getemployee(LoginForm).subscribe((response:any)=>{
          localStorage.setItem('emp_id',response.emp_id)
          localStorage.setItem('loginid',response.loginid)
          window.location.href="/guestmaster/guesthome"
          
        })
        
      }
      else if(response.fail === true){
        alert("Check Username or Password !!")
      }
    })
  }
}
