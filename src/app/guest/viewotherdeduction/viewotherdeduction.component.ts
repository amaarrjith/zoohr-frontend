import { Component, OnInit } from '@angular/core';
import { GuestservivcesService } from '../guestservivces.service';

@Component({
  selector: 'app-viewotherdeduction',
  templateUrl: './viewotherdeduction.component.html',
  styleUrls: ['./viewotherdeduction.component.scss']
})
export class ViewotherdeductionComponent implements OnInit{
  emp_id: any;
  deductionarray: any[]=[];
  constructor(private services:GuestservivcesService){}
  ngOnInit(): void {
    this.emp_id = localStorage.getItem('emp_id')
    this.services.getotherdeductionbyid(this.emp_id).subscribe((response:any)=>{
      this.deductionarray = response
    })
  }

}
