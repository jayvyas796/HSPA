import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

constructor() { }

  authUser(user : any){
    let userArry = [];
    if(localStorage.getItem('Users')){
      userArry = JSON.parse(localStorage.getItem('Users') || '[]');

    }
    return userArry.find((p: { userName: any; password: any; })=>p.userName === user.userName && p.password === user.password);
  }

}
