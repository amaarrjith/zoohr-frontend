import { Component, OnInit } from '@angular/core';
import { AdminserviceService } from 'src/app/adminservice.service';

@Component({
  selector: 'app-addleavemonth',
  templateUrl: './addleavemonth.component.html',
  styleUrls: ['./addleavemonth.component.scss']
})
export class AddleavemonthComponent implements OnInit{
  constructor(private services:AdminserviceService){}
  add={
    casual:'',
    sick:'',
    half:''
  }
  add_error={
    casual:'',
    sick:'',
    half:''
  }
  ngOnInit(): void {
    
  }
  submit(){
    if(
      !this.add.casual||
      !this.add.sick||
      !this.add.half
    ){
      if(!this.add.casual){
        this.add_error.casual = 'none'
      }
      else{
        this.add_error.casual = ''
      }
      if(!this.add.sick){
        this.add_error.sick = 'none'
      }
      else{
        this.add_error.sick = ''
      }
      if(!this.add.half){
        this.add_error.half = 'none'
      }
      else{
        this.add_error.half = ''
      }
    }
    else{
      const addForm = new FormData()
      addForm.append('casual',this.add.casual)
      addForm.append('sick',this.add.sick)
      addForm.append('half',this.add.half)
      this.services.addleavehrformonth(addForm).subscribe(response=>{
        alert("Leave Policy Added")
        window.location.href="/adminmaster/updateleave"
      })
    }
  }
}
