import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GuestservivcesService {
  private baseUrl = "http://127.0.0.1:8000/api/"
  constructor(private http:HttpClient) { }

  login(LoginForm:FormData){

    return this.http.post(`${this.baseUrl}login`,LoginForm)

  }

  getemployee(LoginForm:FormData){
    return this.http.post(`${this.baseUrl}getemployee`,LoginForm)
  }
  getemployeebyid(emp_id:any){
    return this.http.get(`${this.baseUrl}getemployeebyid/${emp_id}`)
  }
  submitleave(LeaveForm:FormData){
    return this.http.post(`${this.baseUrl}submitleave`,LeaveForm)
  }
  getleavestatusbyid(emp_id:any){
    return this.http.get(`${this.baseUrl}getleavestatusbyid/${emp_id}`)
  }

  getleavestatus(){
    return this.http.get(`${this.baseUrl}submitleave`)
  }

  deleteleave(leave_id:any){
    return this.http.delete(`${this.baseUrl}deleteleave/${leave_id}`)
  }
  approveleave(emp_id:any,leave_id:any){
    return this.http.get(`${this.baseUrl}approveleave/${emp_id}/${leave_id}`)
  }
  getsalarybyid(emp_id:any){
    return this.http.get(`${this.baseUrl}getsalarybyid/${emp_id}`)
  }
  getleavebyid(emp_id:any){
    return this.http.get(`${this.baseUrl}getleavebyid/${emp_id}`)
  }
  forgetpassword(PasswordForm:FormData){
    return this.http.post(`${this.baseUrl}forgetpassword`,PasswordForm)
  }
  changepassword(ChangePasswordForm:FormData){
    return this.http.post(`${this.baseUrl}changepassword`,ChangePasswordForm)
  }
  getbonusbyid(emp_id:any){
    return this.http.get(`${this.baseUrl}getbonusbyid/${emp_id}`)
  }
  getdeductionbyid(emp_id:any){
    return this.http.get(`${this.baseUrl}getdeductionbyid/${emp_id}`)
  }
  getotherdeductionbyid(emp_id:any){
    return this.http.get(`${this.baseUrl}getotherdeductionbyid/${emp_id}`)
  }
  gethalfday(emp_id:any){
    return this.http.get(`${this.baseUrl}gethalfday/${emp_id}`)
  }

  getstatusmonthbyid(emp_id:any){
    return this.http.get(`${this.baseUrl}getstatusmonthbyid/${emp_id}`)
  }

  updatestatusinleavemonth(emp_id:any){
    return this.http.get(`${this.baseUrl}updatestatusinleavemonth/${emp_id}`)
  }
  leavemonth(emp_id:any,leave_id:any){
    return this.http.get(`${this.baseUrl}leavemonth/${emp_id}/${leave_id}`)
  }
  getsalarymonthbyid(emp_id:any){
    return this.http.get(`${this.baseUrl}getsalarymonthbyid/${emp_id}`)
  }
}
