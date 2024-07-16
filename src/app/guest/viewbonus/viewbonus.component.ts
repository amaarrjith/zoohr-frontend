import { Component, OnInit } from '@angular/core';
import { GuestservivcesService } from '../guestservivces.service';

@Component({
  selector: 'app-viewbonus',
  templateUrl: './viewbonus.component.html',
  styleUrls: ['./viewbonus.component.scss']
})
export class ViewbonusComponent implements OnInit{
  emp_id: any;
  bonusarray: any[]=[];
  constructor(private services:GuestservivcesService){}
  ngOnInit(): void {
    this.emp_id = localStorage.getItem('emp_id')
    this.services.getbonusbyid(this.emp_id).subscribe((response:any)=>{
      this.bonusarray = response
    })
  }

}
