import { Component,inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrl: './user-login.component.css'
})
export class UserLoginComponent {
  fb: FormBuilder = inject(FormBuilder);
  userservice = inject(UserService)
  router = inject(Router)
  validAt = '';
  
 userCredential = this.fb.group({
   username:['',Validators.required],
   password:['',Validators.required]
 });

 get username(){
  return this.userCredential.get('username');
 }
 get password(){
  return this.userCredential.get('password');
 }

 onSubmitUser(){
  console.log(this.userCredential.value)
  this.userservice.userLogin(this.userCredential.value).subscribe({
  next:(res)=>{
    if(res.length===0){
      // alert("invalid username")
      this.validAt='user';
    }else{
      //comapre passwords
      if(this.userCredential.value.password===res[0].password){
        //navigate to user profile
        // this.router.navigate(['/user-profile'])
        this.router.navigate([`/user-profile/${res[0].username}/user`])
        //change userLoginStatus in server
        this.userservice.setUserLoginStatus(true)
      }else{
        // alert("invalid password")
        this.validAt='pass'
      }
    }
    console.log(res)
  },error:(error)=>{
    console.log("err in user login",error)
  }}
 )
}
}
