import { Component, OnInit } from '@angular/core';
import { GuestservivcesService } from '../guestservivces.service';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.scss']
})
export class ChangepasswordComponent implements OnInit{
  ID:any
  constructor(private services:GuestservivcesService){}
  changepass = {
    password:'',
    repassword:''
  }
  ngOnInit(): void {
    
  }
  submit(){
    if(this.changepass.password !== this.changepass.repassword){
      alert("Password MisMatch !")
    }

    else {
      this.ID = localStorage.getItem('loginid')
      const ChangePasswordForm = new FormData()
      ChangePasswordForm.append('password',this.changepass.password)
      ChangePasswordForm.append('id',this.ID)
      this.services.changepassword(ChangePasswordForm).subscribe(response=>{
        alert("Password Changed Successfully !")
        localStorage.clear()
        window.location.href = "/login"
      })
    }
  }

  home(){
    window.location.href="/login"
  }

}
