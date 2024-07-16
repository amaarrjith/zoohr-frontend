import { Component, OnInit } from '@angular/core';
import { GuestservivcesService } from '../guestservivces.service';

@Component({
  selector: 'app-guestleaveview',
  templateUrl: './guestleaveview.component.html',
  styleUrls: ['./guestleaveview.component.scss']
})
export class GuestleaveviewComponent implements OnInit{
  emp_id: any;
  leavearray: any[]=[];
  constructor(private services:GuestservivcesService){}
  ngOnInit(): void {
    this.emp_id = localStorage.getItem('emp_id')
    this.services.getleavestatusbyid(this.emp_id).subscribe((response:any)=>{
      this.leavearray = response
      console.log(this.leavearray)
    })
}
delete(leave_id:any){
  this.services.deleteleave(leave_id).subscribe((response:any)=>{
    alert("Deleted Successfuilly !")
    location.reload()
  })
}
}