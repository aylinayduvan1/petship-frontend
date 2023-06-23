import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogincComponent } from './pages/loginc/loginc.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { AboutComponent } from './components/categories/about/about.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AuthGuard } from 'src/app/guards/auth.guard';


const routes: Routes = [
  { path: 'login', component: LogincComponent },
  { path: '', component: HomepageComponent },
  { path: 'hakkimizda', component: AboutComponent, pathMatch: 'full' },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'auth', loadChildren: () => import('./services/auth/auth.service').then((m) => m.AuthService) },
  { path: '**', redirectTo: '' }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
