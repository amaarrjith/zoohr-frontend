import { Component, OnInit } from '@angular/core';
import { AdminserviceService } from 'src/app/adminservice.service';

@Component({
  selector: 'app-generatesalaryformonth',
  templateUrl: './generatesalaryformonth.component.html',
  styleUrls: ['./generatesalaryformonth.component.scss']
})
export class GeneratesalaryformonthComponent implements OnInit{
  salaryarray: any[]=[];
  employee = {
    emp_id:''
  }
  employeearray: any[]=[];
  emp_id: any;
  constructor(private services:AdminserviceService){}
  ngOnInit(): void {
    this.employee.emp_id = '0'
    this.services.viewemployeee().subscribe((response:any)=>{
      console.log(response)
      this.employeearray = response
    })
    this.services.viewsalaryforthismonth(this.emp_id).subscribe((response:any)=>{
      this.salaryarray = response
    })
  }

  proceed(){
    this.emp_id = this.employee.emp_id
    this.services.generatesalaryforthismonth(this.emp_id).subscribe((response:any)=>{
      
      if(response.exists === true){
        alert("Salary Already Processed for This Month")
        location.reload()
      }
      else if(response.success === true){
        alert("Salary Processed Please Generate !")
        location.reload()
      }
      
    })
  }
  generate(salary_id:any){
    this.services.proceedsalaryformonth(salary_id).subscribe(response=>{
      alert("Salary Generated")
      location.reload()
    })
  }
  delete(salary_id:any){
    this.services.deletesalary(salary_id).subscribe(response=>{
      alert("Salary Deleted")
      location.reload()
    })
  }

}
