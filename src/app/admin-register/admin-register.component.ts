import { Component, inject } from '@angular/core';
import { UserService } from '../user.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Data } from '../model/data';



@Component({
  selector: 'app-admin-register',
  templateUrl: './admin-register.component.html',
  styleUrl: './admin-register.component.css'
})
export class AdminRegisterComponent {
  fb: FormBuilder = inject(FormBuilder);
  userService = inject(UserService)
  router = inject(Router)
  
 user = this.fb.group({
   username:['',[Validators.required,Validators.pattern('[a-zA-Z ]*')]],
   password:['',[Validators.required,Validators.minLength(4)]],
   email:['',Validators.required,Validators.email],
   dob:['',Validators.required],
 });

 get username(){
  return this.user.get('username');
 }
 get password(){
  return this.user.get('password');
 }
 get email(){
  return this.user.get('email');
 }
 get dob(){
  return this.user.get('dob')
 }
  
 onSubmitUser(){
   let {username,password,email,dob} = this.user.value;
   let newUser = new Data(username,password,email,dob);
    console.log(newUser);
   this.userService.creatAdmin(newUser).subscribe({
     next:(res)=>{
       console.log(res);
        this.router.navigate(['/admin-login'])
     },
    error: (error)=>{
       console.log("err in user creation",error);
     }}
   )
 }
}
