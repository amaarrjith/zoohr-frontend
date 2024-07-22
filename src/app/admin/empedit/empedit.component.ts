import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { AdminserviceService } from 'src/app/adminservice.service';

@Component({
  selector: 'app-empedit',
  templateUrl: './empedit.component.html',
  styleUrls: ['./empedit.component.scss']
})
export class EmpeditComponent implements OnInit{
  emp_id: any
  emp = {
    emp_name:'',
    emp_post:'',
    emp_pay:'',
    emp_login:'',
    emp_pass:'',
    emp_mail:''

  }
  emparray: any[]=[];
  constructor(private services:AdminserviceService,private route:ActivatedRoute){
    this.route.paramMap.subscribe((params:ParamMap)=>{
      this.emp_id = params.get('id')
    })
  }
  ngOnInit(): void {
    console.log(this.emp_id)
    this.services.viewempbyid(this.emp_id).subscribe((response:any)=>{
      this.emparray = response
      console.log(this.emparray)
      this.emp={
        emp_name:this.emparray[0].employee_name,
        emp_post:this.emparray[0].post,
        emp_mail:this.emparray[0].email,
        emp_pay:this.emparray[0].basic_pay,
        emp_login:this.emparray[0].basic_pay,
        emp_pass:this.emparray[0].basic_pay,


      }
    })
  }
  submit(){
    const EditForm = new FormData()
    EditForm.append('emp_name',this.emp.emp_name)
    EditForm.append('emp_mail',this.emp.emp_mail)
    EditForm.append('emp_post',this.emp.emp_post)
    EditForm.append('emp_pay',this.emp.emp_pay)
    this.services.editemp(EditForm,this.emp_id).subscribe(response=>{
      alert("Edited Sucessfully")
      window.location.href="/adminmaster/viewemployee"
    })
  }
}
