import { Component, OnInit } from '@angular/core';
import { GuestservivcesService } from '../guestservivces.service';

@Component({
  selector: 'app-guesthome',
  templateUrl: './guesthome.component.html',
  styleUrls: ['./guesthome.component.scss']
})
export class GuesthomeComponent implements OnInit{
  emp_id: any;
 
  sick_leave: any;
  casual_leave: any;
  paid_leave: any;
  halfleave: any;
  leavemontharray: any[]=[];
  sick_leavem: any;
  casual_leavem: any;
  paid_leavem: any;
  halfleavem: any;
  constructor(private services:GuestservivcesService){}
  ngOnInit(): void {
    
    this.emp_id = localStorage.getItem('emp_id')
    this.services.getleavebyid(this.emp_id).subscribe((response:any)=>{
      
      this.sick_leave = response[0].sick_leave
      this.casual_leave = response[0].casual_leave
      this.paid_leave = response[0].paid_leave
      this.halfleave = response[0].half_day
    })

    this.services.getstatusmonthbyid(this.emp_id).subscribe((response:any)=>{
      console.log(response)
      this.sick_leavem = response[0].sickleave
      this.casual_leavem = response[0].casual_leave
      this.paid_leavem = response[0].paidleave
      this.halfleavem = response[0].halfday
    })
    
  }

}
