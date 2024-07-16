import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './guest/login/login.component';
import { GuestmasterComponent } from './guest/guestmaster/guestmaster.component';
import { AdminmasterComponent } from './admin/adminmaster/adminmaster.component';
import { AdminhomeComponent } from './admin/adminhome/adminhome.component';
import { AddEmployeeComponent } from './admin/add-employee/add-employee.component';
import { ViewEmployeeComponent } from './admin/view-employee/view-employee.component';
import { AddbonusComponent } from './admin/addbonus/addbonus.component';
import { EmpeditComponent } from './admin/empedit/empedit.component';
import { GuesthomeComponent } from './guest/guesthome/guesthome.component';
import { GuestleaveComponent } from './guest/guestleave/guestleave.component';
import { GuestleaveviewComponent } from './guest/guestleaveview/guestleaveview.component';
import { ViewleaveComponent } from './admin/viewleave/viewleave.component';
import { GenerateSalaryComponent } from './admin/generate-salary/generate-salary.component';
import { ViewsalaryComponent } from './admin/viewsalary/viewsalary.component';
import { GuestsalaryviewComponent } from './guest/guestsalaryview/guestsalaryview.component';
import { ForgetpasswordComponent } from './guest/forgetpassword/forgetpassword.component';
import { ChangepasswordComponent } from './guest/changepassword/changepassword.component';
import { GeneratesalaryformonthComponent } from './admin/generatesalaryformonth/generatesalaryformonth.component';
import { ViewbonusComponent } from './guest/viewbonus/viewbonus.component';
import { ViewdeductionComponent } from './guest/viewdeduction/viewdeduction.component';
import { ViewotherdeductionComponent } from './guest/viewotherdeduction/viewotherdeduction.component';
import { ViewallbonusComponent } from './admin/viewallbonus/viewallbonus.component';
import { ViewalldeductionsComponent } from './admin/viewalldeductions/viewalldeductions.component';
import { ViewallotherdeductionsComponent } from './admin/viewallotherdeductions/viewallotherdeductions.component';



const routes: Routes = [
  {path:'',redirectTo:'login', pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'forgetpassword',component:ForgetpasswordComponent},
  {path:'changepassword',component:ChangepasswordComponent},
  {path:'guestmaster',component:GuestmasterComponent,
    children:[
      {path:'guesthome',component:GuesthomeComponent},
      {path:'guestleave',component:GuestleaveComponent},
      {path:'guestleaveview',component:GuestleaveviewComponent},
      {path:'guestsalaryview',component:GuestsalaryviewComponent},
      {path:'viewbonus',component:ViewbonusComponent},
      {path:'viewdeduction',component:ViewdeductionComponent},
      {path:'viewotherdeduction',component:ViewotherdeductionComponent}
    ]},

  {path:'adminmaster',component:AdminmasterComponent,children:[
    {path:'adminhome',component:AdminhomeComponent},
    {path:'addemployee',component:AddEmployeeComponent},
    {path:'viewemployee',component:ViewEmployeeComponent},
    {path:'addbonus',component:AddbonusComponent},
    {path:'empedit/:id',component:EmpeditComponent},
    {path:'viewleave',component:ViewleaveComponent},
    {path:'generatesalary',component:GenerateSalaryComponent},
    {path:'viewsalary',component:ViewsalaryComponent},
    {path:'generatesalaryformonth',component:GeneratesalaryformonthComponent},
    {path:'viewallbonus',component:ViewallbonusComponent},
    {path:'viewalldeductions',component:ViewalldeductionsComponent},
    {path:'viewallotherdeductions',component:ViewallotherdeductionsComponent}
    
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
