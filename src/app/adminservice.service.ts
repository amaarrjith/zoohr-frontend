import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminserviceService {
  private baseUrl = "http://127.0.0.1:8000/api/"
  constructor(private http : HttpClient) { }

  addemployee(EmployeeForm:FormData){
    return this.http.post(`${this.baseUrl}addemployee`,EmployeeForm)
  }

  viewemployeee(){
    return this.http.get(`${this.baseUrl}addemployee`)
  }

  deleteemployee(employee_id:any){
    return this.http.delete(`${this.baseUrl}addemployee/${employee_id}`)
  }
  getcount(){
    return this.http.get(`${this.baseUrl}getcount`)
  }

  getdate(){
    return this.http.get(`${this.baseUrl}getdate`)
  }
  addbonus(BonusForm:FormData){
    return this.http.post(`${this.baseUrl}addbonus`,BonusForm)

  }

  editemp(EditForm:FormData,emp_id:any){
    return this.http.post(`${this.baseUrl}editform/${emp_id}`,EditForm)
  }

  viewempbyid(emp_id:any){
    return this.http.get(`${this.baseUrl}editform/${emp_id}`)
  }
  getcountofleavereq(){
    return this.http.get(`${this.baseUrl}getcountofleavereq`)
  }

  generatesalary(){
    return this.http.get(`${this.baseUrl}generatesalary`)
  }
  viewsalary(){
    return this.http.get(`${this.baseUrl}viewsalary`)
  }
  proceedsalary(salary_id:any){
    return this.http.get(`${this.baseUrl}proceedsalary/${salary_id}`)
  }
  viewsalarygenerated(){
    return this.http.get(`${this.baseUrl}viewsalarygenerated`)
  }
  generatesalaryforthismonth(emp_id:any){
    return this.http.get(`${this.baseUrl}generatesalaryforthismonth/${emp_id}`)
  }
  viewsalaryforthismonth(emp_id:any){
    return this.http.get(`${this.baseUrl}viewsalaryforthismonth/${emp_id}`)
  }
  getallbonus(){
    return this.http.get(`${this.baseUrl}getallbonus`)
  }

  getalldeductions(){
    return this.http.get(`${this.baseUrl}getalldeductions`)
  }

  getallotherdeductions(){
    return this.http.get(`${this.baseUrl}getallotherdeductions`)
  }
  deletesalary(salary_id:any){
    return this.http.get(`${this.baseUrl}deletesalary/${salary_id}`)
  }
  proceedsalaryformonth(salary_id:any){
    return this.http.get(`${this.baseUrl}proceedsalaryformonth/${salary_id}`)
  }
  deletesalaryformonth(salary_id:any){
    return this.http.get(`${this.baseUrl}deletesalaryformonth/${salary_id}`)
  }
  viewsalarymonth(){
    return this.http.get(`${this.baseUrl}viewsalarymonth`)
  }
  deletesalaryall(salary_id:any){
    return this.http.get(`${this.baseUrl}deletesalaryall/${salary_id}`)
  }
}
