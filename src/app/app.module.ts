import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { IndexComponent } from './index/index.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ProfilComponent } from './profil/profil.component';
import { SignupComponent } from './signup/signup.component';
import { AcessoriesRouterModule } from './acessories-router.module';
import{ReactiveFormsModule,FormsModule,FormGroup,FormControl,Validators} from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    IndexComponent,
    ContactusComponent,
    HomeComponent,
    ProductsComponent,
    ProfilComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AcessoriesRouterModule,
    ReactiveFormsModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
