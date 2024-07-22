import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { AdminserviceService } from 'src/app/adminservice.service';

@Component({
  selector: 'app-monthlyleaveedit',
  templateUrl: './monthlyleaveedit.component.html',
  styleUrls: ['./monthlyleaveedit.component.scss']
})
export class MonthlyleaveeditComponent implements OnInit{
  editid: any;
  editarray: any[]=[];
  constructor(private route:ActivatedRoute,private services:AdminserviceService){
    this.route.paramMap.subscribe((params:ParamMap)=>{
      this.editid = params.get('id')
    })
  }
  edit = {
    casual:'',
    sick:'',
    half:'',
  }

  ngOnInit(): void {
   this.services.hrmonthleave().subscribe((response:any)=>{
    this.editarray = response.data
    console.log(this.editarray)
    this.edit={
      casual:this.editarray[0].casual,
      sick:this.editarray[0].sick,
      half:this.editarray[0].half,
     }
   })
   
  }
  submit(){
    const updateForm = new FormData()
    updateForm.append('casual',this.edit.casual)
    updateForm.append('sick',this.edit.sick)
    updateForm.append('half',this.edit.half)
    this.services.updateleavemonth(updateForm,this.editid).subscribe(response=>{
      alert("Updated Successfully")
      window.location.href = "adminmaster/updateleave"
    })
  }
}
