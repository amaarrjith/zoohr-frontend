import { Component, OnInit } from '@angular/core';
import { AdminserviceService } from 'src/app/adminservice.service';
import { GuestservivcesService } from 'src/app/guest/guestservivces.service';

@Component({
  selector: 'app-viewallbonus',
  templateUrl: './viewallbonus.component.html',
  styleUrls: ['./viewallbonus.component.scss']
})
export class ViewallbonusComponent implements OnInit{
  bonusarray: any[]=[];
  constructor(private services:AdminserviceService){}
  ngOnInit(): void {
    this.services.getallbonus().subscribe((response:any)=>{
      this.bonusarray = response
    })
  }

}
