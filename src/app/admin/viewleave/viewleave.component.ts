import { Component, OnInit } from '@angular/core';
import { GuestservivcesService } from 'src/app/guest/guestservivces.service';

@Component({
  selector: 'app-viewleave',
  templateUrl: './viewleave.component.html',
  styleUrls: ['./viewleave.component.scss']
})
export class ViewleaveComponent implements OnInit{
  leavearray: any[]=[];
  constructor(private services:GuestservivcesService){}
  ngOnInit(): void {
    this.services.getleavestatus().subscribe((response:any)=>{
      this.leavearray = response
      console.log(this.leavearray)
    })
    
  }
  change(emp_id:any,leave_id:any){
    console.log(emp_id)
    this.services.approveleave(emp_id,leave_id).subscribe(response=>{
      alert("Leave Request Approved")
      location.reload()
    })

    this.services.leavemonth(emp_id,leave_id).subscribe(response=>{

    })
  }
}
