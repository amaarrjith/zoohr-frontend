import { Component, OnInit } from '@angular/core';
import { AdminserviceService } from 'src/app/adminservice.service';

@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrls: ['./adminhome.component.scss']
})
export class AdminhomeComponent implements OnInit{
  emp_count: any;
  date: any;
  constructor(private services:AdminserviceService){}
  ngOnInit(): void {
    this.services.getcount().subscribe((response:any)=>{
      console.log(response)
      this.emp_count = response
    })

    this.services.getdate().subscribe((response:any)=>{
      this.date = response
    })
    
  }

}
