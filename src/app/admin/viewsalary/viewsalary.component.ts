import { Component, OnInit } from '@angular/core';
import { AdminserviceService } from 'src/app/adminservice.service';

@Component({
  selector: 'app-viewsalary',
  templateUrl: './viewsalary.component.html',
  styleUrls: ['./viewsalary.component.scss']
})
export class ViewsalaryComponent implements OnInit{
  salaryarray: any[]=[];
  viewsalary: any[]=[];
  constructor(private services:AdminserviceService){}
  ngOnInit(): void {
    this.services.viewsalarygenerated().subscribe((response:any)=>{
      this.salaryarray = response
    })
    this.services.viewsalarymonth().subscribe((response:any)=>{
      this.viewsalary = response
    })
  }
  delete(emp_id:any){
    
  }

}
