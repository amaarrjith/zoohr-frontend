import { Component, OnInit } from '@angular/core';
import { AdminserviceService } from 'src/app/adminservice.service';

@Component({
  selector: 'app-generate-salary',
  templateUrl: './generate-salary.component.html',
  styleUrls: ['./generate-salary.component.scss']
})
export class GenerateSalaryComponent implements OnInit{
  salaryarray: any;
  value: any;
  constructor(private services:AdminserviceService){}
  ngOnInit(): void {
    
    this.services.generatesalary().subscribe((response:any)=>{
      this.services.viewsalary().subscribe((response:any)=>{
        this.salaryarray = response
  
        
      })
    })

    
    
  }
  generate(salary_id:any){
    this.services.proceedsalary(salary_id).subscribe(response=>{
      alert("Salary Generated")
      location.reload()
    })
  }

  delete(salary_id:any){
    this.services.deletesalaryall(salary_id).subscribe(response=>{
      alert("Salary Deleted")
      window.location.href="/adminmaster/adminhome"
    })
  }
}
