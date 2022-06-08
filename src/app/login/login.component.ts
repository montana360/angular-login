import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  email = '';
  password = '';

  constructor(private router: Router) {}

  gotosignup() {
    this.router.navigate(['/signup']); // define your component where you want to go
  }

  ngOnInit(): void {}

  onSubmit() {
    //  first import the database from localStorage
    const dataSource = localStorage.getItem('database');

    // check if it is empty, if it is the alert that there is no such account
    // if it is not empty then loop through it and find the account matching with the credentials
    if (dataSource) {
      const database = JSON.parse(dataSource);
      const userFound = database.filter((data: any) => {
        return data.email === this.email && data.password === this.password
      });

      if (userFound.length > 0) {
        alert('User found');
        console.log({ User: userFound[0] });
      } else {
        alert('Wrong credentials, please check the email and password');
      }
    } else {
      alert('No user with this credentials found. Please create an account');
    }
  }
}
