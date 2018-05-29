import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { ReservaComponent } from './componentes/reserva/reserva.component';
import { AppinicioComponent } from './componentes/appinicio/appinicio.component';
import { UserComponent } from './user/user.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
    {path: '', redirectTo:'/login',pathMatch: 'full'},
    {path: 'appComponent',component: AppComponent},
    {path: 'home',component: HomeComponent,
        children: [
            {path: '', redirectTo:'inicioComponent',pathMatch: 'full'},
            {path: 'reservaComponent',component: ReservaComponent},
            {path: 'inicioComponent',component: AppinicioComponent},            
                ]
    },
    
    {path: 'signup',component: UserComponent,
        children: [ {path: '', component: SignUpComponent }]

    },

    {path: 'login',component: UserComponent,
    children: [{ path: '', component: SignInComponent }]   
    },

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }
