import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-property-details',
  templateUrl: './property-details.component.html',
  styleUrls: ['./property-details.component.css']
})
export class PropertyDetailsComponent implements OnInit {

    public propertyId:number;
  constructor(private route:ActivatedRoute,private router:Router) { }

  ngOnInit() {
    this.propertyId=Number( this.route.snapshot.params['id']);
    this.route.params.subscribe(
      (data) => {
        this.propertyId=+(data['id']);
        //+ sign is used to convert string into number just like Number method
      }
    )
  }

  onSelectNext(){
    this.propertyId+=1;
    this.router.navigate(['property-details',this.propertyId])
  }

}
