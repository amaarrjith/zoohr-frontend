import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { GuestservivcesService } from '../guestservivces.service';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.scss']
})
export class OtpComponent implements OnInit {
  @ViewChild('input1') input1: ElementRef | undefined;
  @ViewChild('input2') input2: ElementRef | undefined;
  @ViewChild('input3') input3: ElementRef | undefined;
  @ViewChild('input4') input4: ElementRef | undefined;

  loginid: any;
  otp = {
    otp1: '',
    otp2: '',
    otp3: '',
    otp4: ''
  };

  constructor(private services: GuestservivcesService) { }

  ngOnInit(): void {
    
    this.loginid = localStorage.getItem('loginid');

   
    if (this.input1) {
      this.input1.nativeElement.focus();
    }
  }

  submit() {
    
    const combined_otp = this.otp.otp1 + this.otp.otp2 + this.otp.otp3 + this.otp.otp4;

    
    const otpForm = new FormData();
    otpForm.append('otp', combined_otp);
    otpForm.append('ID', this.loginid);

    this.services.otp(otpForm).subscribe((response: any) => {
      if (response.success === true) {
        alert("OTP Authentication Successful");
        
        window.location.href = "/changepassword";
      } else {
        alert("OTP Authentication Failed");
        
      }
    });
  }

  home() {
    
    this.services.clearotp(this.loginid).subscribe(() => {
      localStorage.removeItem('loginid'); 
      window.location.href = "/login";
    });
  }

  onInput(event: any, nextInput: number | null) {
    const inputValue = event.target.value;

    
    if (inputValue && inputValue.length === 1 && nextInput !== null) {
      switch (nextInput) {
        case 2:
          if (this.input2) {
            this.input2.nativeElement.focus();
          }
          break;
        case 3:
          if (this.input3) {
            this.input3.nativeElement.focus();
          }
          break;
        case 4:
          if (this.input4) {
            this.input4.nativeElement.focus();
          }
          break;
        default:
          break;
      }
    }
  }

}
