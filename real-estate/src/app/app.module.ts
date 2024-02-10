import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PropertyCardComponent } from './property/property-card/property-card.component';
import { PropertyListComponent } from './property/property-list/property-list.component';
import { AddPropertyComponent } from './property/add-property/add-property.component';
import { HttpClientModule } from '@angular/common/http';
import { HousingService } from './services/housing.service';
import { Routes,RouterModule } from '@angular/router';
import { PropertyDetailsComponent } from './property/property-details/property-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserLoginComponent } from './user/user-login/user-login/user-login.component';
import { UserRegisterComponent } from './user/user-register/user-register/user-register.component';


const appRoute: Routes = [
  {path:'',component:PropertyListComponent},
  {path:'rent-property',component:PropertyListComponent},
  {path:'add-property', component:AddPropertyComponent},
  {path:'property-details/:id',component:PropertyDetailsComponent},
  {path:'user/login',component:UserLoginComponent},
  {path:'user/registration',component:UserRegisterComponent},
  {path:'**',component:PropertyListComponent}

]

@NgModule({
  declarations: [			
    AppComponent,
      NavBarComponent,
      PropertyCardComponent,
      PropertyListComponent,
      AddPropertyComponent,
      PropertyDetailsComponent,
      UserRegisterComponent,
      UserLoginComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [
    HousingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
