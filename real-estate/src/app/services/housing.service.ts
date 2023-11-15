import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { IProperty } from '../property/property-list/IProperty-Interface';
@Injectable({
  providedIn: 'root'
})
export class HousingService {

constructor(private http:HttpClient) { }

/*GetAllProperties() : Observable<IProperty[]> {
  return this.http.get('data/properties.json').pipe(
    map(data=>{
      const propertyArray : any = [];
      for(const Id  in data){
        debugger;
        propertyArray.push(data[Id as keyof typeof data]);
      }
      return propertyArray;
    })
  )
}*/
GetAllProperties() : Observable<IProperty[]> {
  return this.http.get<IProperty[]>('data/properties.json');
}

}