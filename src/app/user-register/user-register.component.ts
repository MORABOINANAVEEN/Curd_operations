import { Component,inject } from '@angular/core';
import { UserService } from '../user.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../model/user';


@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrl: './user-register.component.css'
})
export class UserRegisterComponent {
  fb: FormBuilder = inject(FormBuilder);
  userService = inject(UserService)
  router = inject(Router)
  
 users = this.fb.group({
   username:['',Validators.required,Validators.pattern('[a-zA-Z]*')],
   password:['',Validators.required,Validators.minLength(4)],
   email:['',Validators.required,Validators.email],
   dob:['',Validators.required],
 });

 get username(){
  return this.users.get('username');
 }
 get password(){
  return this.users.get('password');
 }
 get email(){
  return this.users.get('email');
 }
 get dob(){
  return this.users.get('dob')
 }
  
 onSubmitUser(){
   let {username,password,email,dob} = this.users.value;
   let newUser = new User(username,password,email,dob);
    console.log(newUser);
   this.userService.createUser(newUser).subscribe({
     next:(res)=>{
       console.log(res);
        this.router.navigate(['/user-login'])
     },
    error: (error)=>{
       console.log("err in user creation",error);
      
     }}
   )
 }
}
