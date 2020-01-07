import { NgModule } from '@angular/core';
import { RouterModule , Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {SignupComponent} from './signup/signup.component';
import {ProductsComponent} from './products/products.component';
import {ContactusComponent} from './contactus/contactus.component';
import {ProfilComponent} from './profil/profil.component';

const router:Routes=[
  {path:'home' ,component:HomeComponent},
  {path:'login', component:LoginComponent},
  {path:'signup' , component:SignupComponent},
  {path:'products' , component:ProductsComponent},
  {path:'contactUs' , component:ContactusComponent},
  {path:'profil' , component:ProfilComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(router)],
  exports:[RouterModule]
})
export class AcessoriesRouterModule { }
