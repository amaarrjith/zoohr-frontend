import { Component, OnInit } from '@angular/core';
import { AdminserviceService } from 'src/app/adminservice.service';

@Component({
  selector: 'app-adminmaster',
  templateUrl: './adminmaster.component.html',
  styleUrls: ['./adminmaster.component.scss']
})
export class AdminmasterComponent implements OnInit{
  count: any;
  username: any;
  constructor(private services:AdminserviceService){}
  ngOnInit(): void {
    this.username = localStorage.getItem('username')
    if(this.username){
      this.services.getcountofleavereq().subscribe((response:any)=>{
        this.count = response
        console.log(response)
      })
    }
    else{
      window.location.href="/login"
    }
    
  }
  logout(){
    localStorage.clear()
    window.location.href="/login"
  }
}
