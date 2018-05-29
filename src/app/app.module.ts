import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { UserComponent } from './user/user.component';
import { AppheaderComponent } from './componentes/appheader/appheader.component';
import { AppsettingsComponent } from './componentes/appsettings/appsettings.component';
import { AppmenuComponent } from './componentes/appmenu/appmenu.component';
import { AppfooterComponent } from './componentes/appfooter/appfooter.component';
import { ReservaComponent } from './componentes/reserva/reserva.component';
import { AppinicioComponent } from './componentes/appinicio/appinicio.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AppheaderComponent,
    AppsettingsComponent,
    AppmenuComponent,
    AppfooterComponent,
    ReservaComponent,
    AppinicioComponent,
    SignInComponent,
    SignUpComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
