import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';
import { FormGroup } from '@angular/forms';
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent implements OnInit {

  activatedRoute = inject(ActivatedRoute)
  userService = inject(UserService)
  router = inject(Router);
  // fb:FormGroup = inject(FormGroup)
  currentUser:any;
  currentRole:string;
  // editForm:FormGroup;
  // edit:any;

  ngOnInit(): void {
    //get url param
    let username =this.activatedRoute.snapshot.paramMap.get('username');
    let role = this.activatedRoute.snapshot.paramMap.get('role')

    console.log("Role is ",role)
    console.log(username)
    //get user details based on username
    if(role==="user"){
      this.userService.getUserByUsername(username).subscribe({
        next:(userList)=>{
          // console.log(user)
          this.currentUser = userList[0];
          this.currentRole = role;          
        },
        error: (error)=>{
          console.log("err in reading user data",error)
        }}
        )
      }else{
        this.userService.getAdminByUsername(username).subscribe({
          next:(adminList)=>{
            this.currentUser = adminList[0];
            this.currentRole = role; 
          },
          error:(err)=>{
            console.log("Error in getting admin data ",err)
          }
        })
      }
        
  }

  onUserClick(){
    this.router.navigate(['view'])
  }

  onAdminClick(){
    this.router.navigate(['properties'])
  }
  // onEdit(){
  //   this.edit = this.fb.value({
  //     username:[''],
  //     email:[''],
  //     dob:['']
  //   })
  // }
}
