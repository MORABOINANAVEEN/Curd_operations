import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { User } from '../model/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  constructor(private router: Router) { 
   
  }
  onUserReg(){
    this.router.navigate(['/user-register']);
 
 
  }
  onAdminReg(){
 this.router.navigate(['/admin-register']);
   
  }
  
 }
