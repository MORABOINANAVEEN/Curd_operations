import { Component, OnInit } from '@angular/core';
import { Property } from '../model/property';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PropertiesService } from '../properties.service';

@Component({
  selector: 'app-view-data',
  templateUrl: './view-data.component.html',
  styleUrl: './view-data.component.css'
})
export class ViewDataComponent implements OnInit {
  pData !: any;
  formValue !: FormGroup;
  sold:string;
  propertyObj : Property = new Property()

  constructor(private fb:FormBuilder , private api : PropertiesService){}

  ngOnInit(): void {
    this.formValue= this.fb.group({
      pTitle : [''],
      pPrice : [''],
      pLocation : [''],
      pDetails : ['']
    })
    this.getPropData()
  }

  getPropData(){
    this.api.getData().subscribe(
      res=>{
        this.pData = res;
      } )
  }
  onChange(){
    // return this.sold  = "properties is Bought";
    console.log("slod")
  }
}
