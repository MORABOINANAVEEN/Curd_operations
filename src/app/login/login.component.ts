import { Component, inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private router: Router) {
  }
  onUserLogin(){
    this.router.navigate(['/user-login']);
 
  }
  onAdminLogin(){
 this.router.navigate(['/admin-login']);
   
  }
}

