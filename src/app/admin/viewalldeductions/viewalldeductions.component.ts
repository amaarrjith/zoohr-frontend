import { Component, OnInit } from '@angular/core';
import { AdminserviceService } from 'src/app/adminservice.service';

@Component({
  selector: 'app-viewalldeductions',
  templateUrl: './viewalldeductions.component.html',
  styleUrls: ['./viewalldeductions.component.scss']
})
export class ViewalldeductionsComponent implements OnInit{
  deductionarray: any[]=[];
  constructor(private services:AdminserviceService){}
  ngOnInit(): void {
    this.services.getalldeductions().subscribe((response:any)=>{
      this.deductionarray = response
    })
  }

}
