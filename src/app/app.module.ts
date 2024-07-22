import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './guest/login/login.component';
import { GuestmasterComponent } from './guest/guestmaster/guestmaster.component';
import { GuesthomeComponent } from './guest/guesthome/guesthome.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminmasterComponent } from './admin/adminmaster/adminmaster.component';
import { AdminhomeComponent } from './admin/adminhome/adminhome.component';
import { AddEmployeeComponent } from './admin/add-employee/add-employee.component';
import { ViewEmployeeComponent } from './admin/view-employee/view-employee.component';
import { AddbonusComponent } from './admin/addbonus/addbonus.component';
import { EmpeditComponent } from './admin/empedit/empedit.component';
import { GuestleaveComponent } from './guest/guestleave/guestleave.component';
import { GuestleaveviewComponent } from './guest/guestleaveview/guestleaveview.component';
import { ViewleaveComponent } from './admin/viewleave/viewleave.component';
import { GenerateSalaryComponent } from './admin/generate-salary/generate-salary.component';
import { ViewsalaryComponent } from './admin/viewsalary/viewsalary.component';
import { GuestsalaryviewComponent } from './guest/guestsalaryview/guestsalaryview.component';
import { ForgetpasswordComponent } from './guest/forgetpassword/forgetpassword.component';
import { ChangepasswordComponent } from './guest/changepassword/changepassword.component';
import { GeneratesalaryformonthComponent } from './admin/generatesalaryformonth/generatesalaryformonth.component';
import { ViewdeductionComponent } from './guest/viewdeduction/viewdeduction.component';
import { ViewbonusComponent } from './guest/viewbonus/viewbonus.component';
import { ViewotherdeductionComponent } from './guest/viewotherdeduction/viewotherdeduction.component';
import { ViewallbonusComponent } from './admin/viewallbonus/viewallbonus.component';
import { ViewalldeductionsComponent } from './admin/viewalldeductions/viewalldeductions.component';
import { ViewallotherdeductionsComponent } from './admin/viewallotherdeductions/viewallotherdeductions.component';
import { OtpComponent } from './guest/otp/otp.component';
import { UpdateleaveComponent } from './admin/updateleave/updateleave.component';
import { AllleaveeditComponent } from './admin/allleaveedit/allleaveedit.component';
import { AddleaveforhrComponent } from './admin/addleaveforhr/addleaveforhr.component';
import { MonthlyleaveeditComponent } from './admin/monthlyleaveedit/monthlyleaveedit.component';
import { AddleavemonthComponent } from './admin/addleavemonth/addleavemonth.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    GuestmasterComponent,
    GuesthomeComponent,
    AdminmasterComponent,
    AdminhomeComponent,
    AddEmployeeComponent,
    ViewEmployeeComponent,
    AddbonusComponent,
    EmpeditComponent,
    GuestleaveComponent,
    GuestleaveviewComponent,
    ViewleaveComponent,
    GenerateSalaryComponent,
    ViewsalaryComponent,
    GuestsalaryviewComponent,
    ForgetpasswordComponent,
    ChangepasswordComponent,
    GeneratesalaryformonthComponent,
    ViewdeductionComponent,
    ViewbonusComponent,
    ViewotherdeductionComponent,
    ViewallbonusComponent,
    ViewalldeductionsComponent,
    ViewallotherdeductionsComponent,
    OtpComponent,
    UpdateleaveComponent,
    AllleaveeditComponent,
    AddleaveforhrComponent,
    MonthlyleaveeditComponent,
    AddleavemonthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
