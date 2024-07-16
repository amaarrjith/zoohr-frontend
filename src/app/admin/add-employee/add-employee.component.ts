import { Component, OnInit } from '@angular/core';
import { AdminserviceService } from 'src/app/adminservice.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent implements OnInit{
  username: any;
  constructor(private services:AdminserviceService){}
  emp = {
    emp_name:'',
    emp_post:'',
    emp_pay:'',
    emp_login:'',
    emp_pass:'',
    emp_repass:''

  }
  ngOnInit(): void {
    
    
  }
  submit(){
    if(this.emp.emp_pass !== this.emp.emp_repass){
      alert("Password MisMatched ! Try Again")
    }

    else{
      const EmployeeForm = new FormData()
      EmployeeForm.append('emp_name',this.emp.emp_name)
      EmployeeForm.append('emp_post',this.emp.emp_post)
      EmployeeForm.append('emp_pay',this.emp.emp_pay)
      EmployeeForm.append('emp_login',this.emp.emp_login)
      EmployeeForm.append('emp_pass',this.emp.emp_pass)
      this.services.addemployee(EmployeeForm).subscribe((response:any)=>{
        if(response.success === true){
          alert("Employee Added Sucessfully")
          location.reload()
        }

        else if(response.fail === true){
          alert("User Already Exists")
        }
        
      })
    }
  }
}
