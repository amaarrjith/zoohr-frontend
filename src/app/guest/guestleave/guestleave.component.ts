import { Component, OnInit } from '@angular/core';
import { GuestservivcesService } from '../guestservivces.service';

@Component({
  selector: 'app-guestleave',
  templateUrl: './guestleave.component.html',
  styleUrls: ['./guestleave.component.scss']
})
export class GuestleaveComponent implements OnInit{
  leave={
    date:'',
    reason:''
  }
  emp_id: any;
  constructor(private services:GuestservivcesService){}
  ngOnInit(): void {
    this.emp_id = localStorage.getItem('emp_id')
    this.leave.reason = "0"
  }
  submit(){
    const LeaveForm = new FormData()
    LeaveForm.append('date',this.leave.date)
    LeaveForm.append('reason',this.leave.reason)
    LeaveForm.append('emp_id',this.emp_id)
    this.services.submitleave(LeaveForm).subscribe(reponse=>{
      alert("Leave Request Submitted")
      window.location.href="/guestmaster/guestleaveview"
    })
  }
}
