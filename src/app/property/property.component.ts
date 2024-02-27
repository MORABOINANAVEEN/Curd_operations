import { Component,OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import { Property } from '../model/property';
import { PropertiesService } from '../properties.service';

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrl: './property.component.css'
})
export class PropertyComponent implements OnInit {
  
  formValue !: FormGroup;
  showAdd !: boolean;
  showUpdate !:boolean;
  pData !: any;
  propertyObj : Property = new Property()

  constructor(private fb:FormBuilder , private api : PropertiesService){}
   
  ngOnInit(): void {
    this.formValue = this.fb.group({
      pTitle : [''],
      pPrice : [''],
      pLocation : [''],
      pDetails : ['']
    })
    this.getPropData()
  }

  clickAdd(){
    this.formValue.reset();
    this.showAdd = true;
    this.showUpdate = false;
  }

  postPropDetails(){
    this.propertyObj.pTitle = this.formValue.value.pTitle;
    this.propertyObj.pPrice = this.formValue.value.pPrice;
    this.propertyObj.pLocation = this.formValue.value.pLocation;
    this.propertyObj.pDetails = this.formValue.value.pDetails;

    this.api.postData(this.propertyObj).subscribe(
      res=>{
        console.log(res);
        alert('property data added successfully')
        let ref = document.getElementById('cancel')
        ref?.click();
        this.formValue.reset();
        this.getPropData();
      },err=>{
        alert("something went wrong")
      })
  }

  getPropData(){
    this.api.getData().subscribe(
      res=>{
        this.pData = res;
      } )
  }

  onDelete(row : any){
    this.api.deleteData(row.id).subscribe(
      res=>{
        alert("property deleted")
        this.getPropData();
      })
  }

  onEdit(row : any){
    this.showAdd = false;
    this.showUpdate = true;
    this.propertyObj.id = row.id;
    this.formValue.controls['pTitle'].setValue(row.pTitle);
    this.formValue.controls['pPrice'].setValue(row.pPrice);
    this.formValue.controls['pLocation'].setValue(row.pLocation);
    this.formValue.controls['pDetails'].setValue("hello");
  }
  updatePropDetail(){
    this.propertyObj.pTitle = this.formValue.value.pTitle;
    this.propertyObj.pPrice = this.formValue.value.pPrice;
    this.propertyObj.pLocation = this.formValue.value.pLocation;
    this.propertyObj.pDetails = this.formValue.value.pDetails;

    this.api.updateData(this.propertyObj,this.propertyObj.id).subscribe(
      res=>{
        alert("updated successfully");
        let ref = document.getElementById('cancel')
        ref?.click();
        this.formValue.reset();
        this.getPropData();
      }
    )
  }
  
  }

