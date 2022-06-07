import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
// import { ApicallService } from '../apicall.service';
import { LoginComponent } from '../login/login.component';
// import { Users } from '../users';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
 
  constructor(
    private router: Router,
    public http: HttpClient,
  ) { }
 

  ngOnInit(): void {
    // this.getUserList();
  }

  gotologin(){
    this.router.navigate(['/login']);
  }
  
}
