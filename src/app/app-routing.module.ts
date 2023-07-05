import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogincComponent } from './modules/auth/loginc/loginc.component';
import { HomepageComponent } from './components/pagess/homee/homepage.component';
import { AboutComponent } from './components/about/about.component';
import { ProfileComponent } from './components/pagess/profile/profile.component';
import { AuthGuard } from 'src/app/guards/auth.guard';


const routes: Routes = [
  { path: 'login', component: LogincComponent },
  { path: '', component: HomepageComponent },
  { path: 'hakkimizda', component: AboutComponent, pathMatch: 'full' },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'auth', loadChildren: () => import('./modules/auth/auth.module').then((m) => m.AuthModule) },
  { path: '**', redirectTo: '' }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
