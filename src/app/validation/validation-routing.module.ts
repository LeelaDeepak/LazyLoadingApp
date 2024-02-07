import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadComponent: () =>
      import('../validation/login/login.component').then(
        (Component) => Component.LoginComponent
      ),
  },
  {
    path: 'register',
    loadComponent: () =>
      import('../validation/register/register.component').then(
        (Component) => Component.RegisterComponent
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ValidationRoutingModule {}
