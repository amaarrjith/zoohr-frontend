import { Component, OnInit } from '@angular/core';
import { GuestservivcesService } from '../guestservivces.service';

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.scss']
})
export class ForgetpasswordComponent implements OnInit{
  constructor(private services:GuestservivcesService){}
  password = {
    username:'',
  }
  ngOnInit(): void {
    
  }
  submit(){
    const PasswordForm = new FormData()
    PasswordForm.append('username',this.password.username)
    this.services.forgetpassword(PasswordForm).subscribe((response:any)=>{
      console.log(response)
      if (response.success === true){
        alert('OTP Has Been Sent To Mail-ID')
        localStorage.setItem('loginid',this.password.username)
        window.location.href="/otp"

      }
      else if(response.fail === true){
        alert("User Not Found !")
      }
    })
  }
  home(){
    window.location.href="/login"
  }
}
