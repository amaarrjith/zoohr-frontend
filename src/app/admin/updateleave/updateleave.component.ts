import { Component, OnInit } from '@angular/core';
import { AdminserviceService } from 'src/app/adminservice.service';

@Component({
  selector: 'app-updateleave',
  templateUrl: './updateleave.component.html',
  styleUrls: ['./updateleave.component.scss']
})
export class UpdateleaveComponent implements OnInit{
  array: any[]=[];
  add: any;
  addmonth: any;
  montharray: any[]=[];
  constructor(private services:AdminserviceService){}
  ngOnInit(): void {
    this.services.gethrleave().subscribe((response:any)=>{
      this.array = response
      console.log(response)
    })

    this.services.hrleaveget().subscribe((response:any)=>{
      console.log(response)
      if(response.success===true){
        this.add = 'none'
      }
      else if(response.fail === true){
        this.add = 'add'
      }
    })

    this.services.hrmonthleave().subscribe((response:any)=>{
      
      if(response.success === true){
        this.addmonth = 'none'
        this.montharray = response.data
        console.log(this.montharray)
      }
      else if(response.fail === true){
        this.addmonth = 'add'
      }
    })
  }

  redirect(){
    window.location.href="/adminmaster/addleavehr"
  }
  redirecttomonth(){
    window.location.href="/adminmaster/addleavemonth"
  }
}
