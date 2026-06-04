import { Routes } from '@angular/router';
import { Home } from './features/home/home';
import { Galery } from './features/galery/galery';
import { Form } from './shared/form/form';
import { FormularioLogin } from './shared/formulario-login/formulario-login';


export const routes: Routes = [
    {path:"home", component:Home},
    {path:"galery", component:Galery},
    {path:"registro", component:Form},
    {path: "login", component:FormularioLogin},
    {path:"", redirectTo:"/home", pathMatch:"full"}
];
