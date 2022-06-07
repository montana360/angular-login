import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { ApicallService } from '../apicall.service';
import { LoginComponent } from '../login/login.component';
// import { Users } from '../users';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  firstname = '';
  lastname = '';
  email = '';
  number = '';
  password = '';
  confirm_password = '';
  code = '';

  constructor(private router: Router, public http: HttpClient) {}

  ngOnInit(): void {
    // this.getUserList();
  }

  gotologin() {
    this.router.navigate(['/login']);
  }

  hasError(event: any) {
    console.log({ hasError: event });
  }
  getNumber(event: any) {
    this.number = event;
  }


  onSubmit() {
    if (this.password === this.confirm_password) {
      const dataSource = localStorage.getItem('database');
      if (dataSource) {
        const database = JSON.parse(dataSource);
        database.push({
          firstName: this.firstname,
          lastName: this.lastname,
          email: this.email,
          phone: this.number,
          password: this.password,
          code: this.code,
         });
        localStorage.setItem('database', JSON.stringify(database));
        this.clearForm();
      } else {
        let database = [];
        database.push({
          firstName: this.firstname,
          lastName: this.lastname,
          email: this.email,
          phone: this.number,
          password: this.password,
          code: this.code,
        });
        localStorage.setItem('database', JSON.stringify(database));
        this.clearForm();
      }
      } else {
        alert('Both passwords must be the same');
      return;
    }
  }

  clearForm() {
    this.firstname = '';
    this.lastname = '';
    this.email = '';
    this.number = '';
    this.password = '';
    this.confirm_password = '';
    this.code = '';
  }
}
