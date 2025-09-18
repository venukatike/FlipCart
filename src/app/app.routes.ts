import { Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar/navbar.component';
import { Login } from './LoginModule/login.component';
import { NavbarModule } from './navbar/navbar.module';

export const routes: Routes = [

    {path:'login', component:Login},
    {path:'', redirectTo:'login' ,pathMatch:'full'},
    //{path:'navbar',loadChildren: () => import('./navbar/navbar.module').then(m => m.NavbarModule)},
    {path:'navbar', component:NavbarComponent},
    //{path:'', redirectTo:'navbar' ,pathMatch:'full'},
 
];
