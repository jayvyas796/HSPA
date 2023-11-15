
import { Component, OnInit } from '@angular/core';
import { HousingService } from '../../services/housing.service';
import { IProperty } from './IProperty-Interface';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  PropertyArr:Array<IProperty> = [];

  constructor(private housingService:HousingService) { }

  ngOnInit(): void {
    this.housingService.GetAllProperties().subscribe(
      data=>{
        this.PropertyArr=data;
        //console.log(data);
      },error=>{
        console.log("Error Log : "+error);
      }
    )
  }

}
