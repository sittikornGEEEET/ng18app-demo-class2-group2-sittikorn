import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { RegisterComponent } from './register/register.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: '/about',
        component:AboutComponent
    },
    {
        path: '/contact',
        component:ContactComponent
    },
    {
        path: '/login',
        component:FooterComponent
    },
    {
        path: '/regiser',
        component:RegisterComponent
    },
    {
        path: '/footer',
        component:FooterComponent
    }

];
