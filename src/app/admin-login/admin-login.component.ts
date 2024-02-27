import { Component,inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrl: './admin-login.component.css'
})
export class AdminLoginComponent {
  fb: FormBuilder = inject(FormBuilder);
  userService = inject(UserService)
  router = inject(Router)
  
 userCredential = this.fb.group({
   username:['',Validators.required],
   password:['',Validators.required]
 });

 validity:string='';
 invalidAt:string='';

 get username(){
  return this.userCredential.get('username');
 }
 get password(){
  return this.userCredential.get('password');
 }

 onSubmitUser(){
  console.log(this.userCredential.value)
  this.userService.adminLogin(this.userCredential.value).subscribe({
  next:(res)=>{
    if(res.length===0){
      // alert("invalid username")
      this.invalidAt='user'
    }else{
      //comapre passwords
      if(this.userCredential.value.password===res[0].password){
        //navigate to user profile
        // this.router.navigate(['/user-profile'])
        this.router.navigate([`/user-profile/${res[0].username}/admin`])
        //change userLoginStatus in server
        this.userService.setUserLoginStatus(true)
      }else{
        // alert("invalid password")
        this.invalidAt='pass'
      }
    }
    console.log(res)
  },error:(error)=>{
    console.log("err in user login",error)
  }}
 )
}
}
