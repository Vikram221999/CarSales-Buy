import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddcarComponent } from './addcar/addcar.component';
import { CardetailsComponent } from './cardetails/cardetails.component';
import { CarinfoComponent } from './carinfo/carinfo.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SignupComponent } from './signup/signup.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';

const routes: Routes = [ {path:'nav',component:NavbarComponent},
{path:'login',component:LoginComponent},
{path:'signup',component:SignupComponent},
 {path:'home',component:HomeComponent},
{path:'addcar',component:AddcarComponent},
{path:'users',component:UserdetailsComponent},
{path:'dashboard',component:DashboardComponent},
{path:'cars',component:CardetailsComponent},
{path:'profile',component:MyProfileComponent},
{path:'carinfo',component:CarinfoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
