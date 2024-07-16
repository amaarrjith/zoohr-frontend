import { Component, OnInit } from '@angular/core';
import { GuestservivcesService } from '../guestservivces.service';

@Component({
  selector: 'app-guestsalaryview',
  templateUrl: './guestsalaryview.component.html',
  styleUrls: ['./guestsalaryview.component.scss']
})
export class GuestsalaryviewComponent implements OnInit{
  emp_id: any;
  viewarray: any[]=[];
  constructor(private services :GuestservivcesService){}
  salaryarray: any[]=[];
  ngOnInit(): void {
    this.emp_id = localStorage.getItem('emp_id')
    this.services.getsalarybyid(this.emp_id).subscribe((response:any)=>{
      this.salaryarray =response
    })
    
    this.services.getsalarymonthbyid(this.emp_id).subscribe((response:any)=>{
      this.viewarray = response
    })
    
  }

}
