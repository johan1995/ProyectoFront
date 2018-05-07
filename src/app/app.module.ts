import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { UserComponent } from './user/user.component';
import { AppheaderComponent } from './componentes/appheader/appheader.component';
import { AppsettingsComponent } from './componentes/appsettings/appsettings.component';
import { AppmenuComponent } from './componentes/appmenu/appmenu.component';
import { AppfooterComponent } from './componentes/appfooter/appfooter.component';
import { ReservaComponent } from './componentes/reserva/reserva.component';
import { AppinicioComponent } from './componentes/appinicio/appinicio.component';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AppheaderComponent,
    AppsettingsComponent,
    AppmenuComponent,
    AppfooterComponent,
    ReservaComponent,
    AppinicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
