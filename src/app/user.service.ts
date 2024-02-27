import { Injectable, inject } from '@angular/core';
import { User } from './model/user';
import { HttpClient } from '@angular/common/http';
import { Observable,BehaviorSubject } from 'rxjs';
import { Property } from './model/property';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userObj = inject(HttpClient)

  userLoginStatus = new BehaviorSubject<boolean>(false)

  setUserLoginStatus(value:boolean){
    this.userLoginStatus.next(value);
  }
  getUserLoginStatus(){
    return this.userLoginStatus.asObservable()
  }

  //create new User
  createUser(newUser:User):Observable<any>{
    return this.userObj.post('http://localhost:3000/users',newUser)
  }

  //user login
  userLogin(userCredObj):Observable<any>{
    return this.userObj.get(`http://localhost:3000/users?username=${userCredObj.username}`);
  }

  //get user by username
  getUserByUsername(username):Observable<any>{
    return this.userObj.get(`http://localhost:3000/users?username=${username}`);
  }

  //logOut
  logOut(){
    this.setUserLoginStatus(false);  
  }
  
   //create new User
   creatAdmin(newUser):Observable<any>{
    return this.userObj.post('http://localhost:3000/admin',newUser)
  }

  //user login
  adminLogin(userCredObj):Observable<any>{
    return this.userObj.get(`http://localhost:3000/admin?username=${userCredObj.username}`);
  }

  //get user by username
  getAdminByUsername(username):Observable<any>{
    return this.userObj.get(`http://localhost:3000/admin?username=${username}`);
  }

}
