import { Component, OnInit } from '@angular/core';
import { AdminserviceService } from 'src/app/adminservice.service';

@Component({
  selector: 'app-viewallotherdeductions',
  templateUrl: './viewallotherdeductions.component.html',
  styleUrls: ['./viewallotherdeductions.component.scss']
})
export class ViewallotherdeductionsComponent implements OnInit{
  otherdeductionsarray: any[]=[];
  constructor(private services :AdminserviceService){}
  ngOnInit(): void {
    this.services.getallotherdeductions().subscribe((response:any)=>{
      this.otherdeductionsarray = response
    })
  }

}
