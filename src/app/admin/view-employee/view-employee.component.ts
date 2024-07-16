import { Component, OnInit } from '@angular/core';
import { AdminserviceService } from 'src/app/adminservice.service';

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.scss']
})
export class ViewEmployeeComponent implements OnInit{
  emparray: any[]=[];
  username: any;
  constructor(private services:AdminserviceService){}
  ngOnInit(): void {
    this.username = localStorage.getItem('username')
    if (this.username){
      this.services.viewemployeee().subscribe((response:any)=>{
        this.emparray = response
        console.log(this.emparray)
      })
    }
    else{
      window.location.href="/login"
    }
  
  }

  delete(employee_id:any){
    this.services.deleteemployee(employee_id).subscribe(response=>{
      alert("Employee Deleted Successfully")
      location.reload()
    })
  }

}
