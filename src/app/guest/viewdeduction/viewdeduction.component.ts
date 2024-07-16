import { Component, OnInit } from '@angular/core';
import { GuestservivcesService } from '../guestservivces.service';

@Component({
  selector: 'app-viewdeduction',
  templateUrl: './viewdeduction.component.html',
  styleUrls: ['./viewdeduction.component.scss']
})
export class ViewdeductionComponent implements OnInit{
  emp_id: any;
  deductionarray: any[]=[];
  constructor(private services : GuestservivcesService){}
  ngOnInit(): void {
    this.emp_id = localStorage.getItem('emp_id')
    this.services.getdeductionbyid(this.emp_id).subscribe((response:any)=>{
      this.deductionarray = response
    })
  }

}
