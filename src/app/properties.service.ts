import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class PropertiesService {

  constructor(private http : HttpClient) { }

  //Now Add GET,POST,PUT,DELETE methods 
  //add property using post method
  postData(data : any){
    return this.http.post<any>("http://localhost:3000/properties",data).pipe(map(
      (res : any)=>{
        return res;
      } ))
  }
   
  //read property using get method
  getData(){
    return this.http.get<any>("http://localhost:3000/properties").pipe(map(
      (res : any)=>{
        return res;
      } ))
  }
    
  //update property using put method
  updateData(data : any, id : number){
    return this.http.put<any>("http://localhost:3000/properties/"+id,data).pipe(map(
      (res : any)=>{
        return res;
      } ))
  }

   
  //delete property using delete method
  deleteData( id : number){
    return this.http.delete<any>("http://localhost:3000/properties/"+id).pipe(map(
      (res : any)=>{
        return res;
      } ))
  }

}
