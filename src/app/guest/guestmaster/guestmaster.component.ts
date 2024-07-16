import { Component, OnInit } from '@angular/core';
import { GuestservivcesService } from '../guestservivces.service';

@Component({
  selector: 'app-guestmaster',
  templateUrl: './guestmaster.component.html',
  styleUrls: ['./guestmaster.component.scss']
})
export class GuestmasterComponent implements OnInit{
  emp_name: any;
  emp_id: any;
  constructor(private services:GuestservivcesService){}
  
  ngOnInit(): void {

    this.emp_id = localStorage.getItem('emp_id')
    if(this.emp_id){
      this.services.getemployeebyid(this.emp_id).subscribe((response:any)=>{
        console.log(response)
        this.emp_name = response[0].employee_name
      })

      this.services.updatestatusinleavemonth(this.emp_id).subscribe(response=>{
        
      })
    }
    else{
      window.location.href="/login"
    }
    
  }
  logout(){
    localStorage.clear()
    window.location.href="/login"
  }

}
