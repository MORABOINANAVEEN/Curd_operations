import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AdminRegisterComponent } from './admin-register/admin-register.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { PropertyComponent } from './property/property.component';
import { ViewDataComponent } from './view-data/view-data.component';

const routes: Routes = [
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'admin-register',
    component:AdminRegisterComponent
  },
  {
    path:'user-register',
    component:UserRegisterComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'admin-login',
    component:AdminLoginComponent
  },
  {
    path:'user-login',
    component:UserLoginComponent
  },
  {
    path:'properties',
    component:PropertyComponent
  },
  {
    path:'view',
    component:ViewDataComponent
  },
  {
    path:'user-profile/:username/:role',
    component:UserProfileComponent
  },
  
  {
    path:'',
    redirectTo:'home',
    pathMatch:'full'
  },// redirect to `first-component`
  {
    path:'**',
    component:PageNotFoundComponent
  }// Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
