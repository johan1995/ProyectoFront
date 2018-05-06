import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { ReservaComponent } from './componentes/reserva/reserva.component';

const routes: Routes = [
    {path : '', redirectTo:'/appComponent',pathMatch: 'full'},
    {path: 'appComponent',component: AppComponent},
    {path: 'reservaComponent',component: ReservaComponent}

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }
