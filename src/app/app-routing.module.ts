import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClickerComponent } from './components/clicker/clicker.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {
    path: 'clicker',
    component: ClickerComponent
  },
  {
    path: 'home',
    component: ClickerComponent
  },
  {
    path: 'login',
    component: LoginComponent
  }
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
