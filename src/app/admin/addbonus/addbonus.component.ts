import { Component, OnInit } from '@angular/core';
import { AdminserviceService } from 'src/app/adminservice.service';

@Component({
  selector: 'app-addbonus',
  templateUrl: './addbonus.component.html',
  styleUrls: ['./addbonus.component.scss']
})
export class AddbonusComponent implements OnInit{
  emparray: any[]=[];
  bonus = {
    type:'',
    employee_id:'',
    emp_amount :'',
    reason:''
  }
  constructor(private services:AdminserviceService){}
  ngOnInit(): void {
    this.bonus.employee_id = '0'
    this.bonus.type = '0'
    this.services.viewemployeee().subscribe((response:any)=>{
      this.emparray = response 
    })
  }
  submit(){
    if(this.bonus.employee_id === '0'){
      alert("Choose Employee")
    }
    else if(this.bonus.emp_amount === ''){
      alert("Enter Amount")
    }
    else if(this.bonus.reason === ''){
      alert("Enter Reason")
    }
    else{
      const BonusForm = new FormData()
      BonusForm.append('type',this.bonus.type)
      BonusForm.append('employee_id',this.bonus.employee_id)
      BonusForm.append('emp_amount',this.bonus.emp_amount)
      BonusForm.append('reason',this.bonus.reason)
      this.services.addbonus(BonusForm).subscribe((response:any)=>{
        console.log(response)
        if(response.bonus === true){
          alert("Bonus Added Sucessfully")
          location.reload()
        }
        else if(response.reduction === true){
          alert("Deductons Added Sucessfully")
          location.reload()
        }
        else{
          alert("Choose Bonus Or Reduction")
        }
      
    })
    }
    
  }
}
