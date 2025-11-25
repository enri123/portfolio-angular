import { Routes } from '@angular/router';
import { SobreMi } from './pages/sobre-mi/sobre-mi';
import { Portafolio } from './pages/portafolio/portafolio';
import { Curriculum } from './pages/curriculum/curriculum';
import { Contacto } from './pages/contacto/contacto';
import { Home } from './pages/home/home'

export const routes: Routes = [
    {
        path: 'home',  component: Home, pathMatch: 'full'
    },
    {
        path: 'sobre-mi', component: SobreMi
    },
    {
        path: 'curriculum', component: Curriculum
    },
    {
        path: 'portafolio', component: Portafolio
    },
    {
        path: 'contacto', component: Contacto
    },  
    { 
        path: '**', redirectTo: 'home' 
    },
    { 
        path: ' ', redirectTo: 'home' 
    }

];
