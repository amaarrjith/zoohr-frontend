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
    emp_email:'',
    emp_post:'',
    emp_pay:'',
    emp_login:'',
    emp_pass:'',
    emp_repass:''

  }

  emp_error={
    emp_name:'',
    emp_email:'',
    emp_post:'',
    emp_pay:'',
    emp_login:'',
    emp_pass:'',
    emp_repass:''
  }
  ngOnInit(): void {
    

    
  }
  submit() {
    if (
      !this.emp.emp_name ||
      !this.emp.emp_email ||
      !this.emp.emp_post ||
      !this.emp.emp_pay ||
      !this.emp.emp_login ||
      !this.emp.emp_pass ||
      !this.emp.emp_repass
    ) {
      
      if (!this.emp.emp_name) {
        this.emp_error.emp_name = 'none';
      }
      else{
        this.emp_error.emp_name = ''
      }
      if (!this.emp.emp_email) {
        this.emp_error.emp_email = 'none';
      }
      else{
        this.emp_error.emp_email = ''
      }
      if (!this.emp.emp_post) {
        this.emp_error.emp_post = 'none';
      }
      else{
        this.emp_error.emp_post = ''
      }
      if (!this.emp.emp_pay) {
        this.emp_error.emp_pay = 'none';
      }
      else{
        this.emp_error.emp_pay = ''
      }
      if (!this.emp.emp_login) {
        this.emp_error.emp_login = 'none';
      }
      else{
        this.emp_error.emp_login = ''
      }
      if (!this.emp.emp_pass) {
        this.emp_error.emp_pass = 'none';
      }
      else{
        this.emp_error.emp_pass = ''
      }
      if (!this.emp.emp_repass) {
        this.emp_error.emp_repass = 'none';
      }
      else{
        this.emp_error.emp_repass = ''
      }
      
     
      
      
    } else if (this.emp.emp_pass !== this.emp.emp_repass) {
      
      alert('Password Mismatch! Please try again.');
  
    } else {
     
      const EmployeeForm = new FormData();
      EmployeeForm.append('emp_name', this.emp.emp_name);
      EmployeeForm.append('emp_email', this.emp.emp_email);
      EmployeeForm.append('emp_post', this.emp.emp_post);
      EmployeeForm.append('emp_pay', this.emp.emp_pay);
      EmployeeForm.append('emp_login', this.emp.emp_login);
      EmployeeForm.append('emp_pass', this.emp.emp_pass);
  
      
      this.services.addemployee(EmployeeForm).subscribe((response: any) => {
        if (response.success === true) {
          alert('Employee Added Successfully');
          location.reload();
        } else if (response.fail === true) {
          alert('User Already Exists');
        }
      });
    }
  }
  
}
