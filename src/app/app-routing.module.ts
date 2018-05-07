import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { ReservaComponent } from './componentes/reserva/reserva.component';
import { AppinicioComponent } from './componentes/appinicio/appinicio.component';

const routes: Routes = [
    {path : '', redirectTo:'/inicioComponent',pathMatch: 'full'},
    {path: 'appComponent',component: AppComponent},
    {path: 'reservaComponent',component: ReservaComponent},
    {path: 'inicioComponent',component: AppinicioComponent}

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }
