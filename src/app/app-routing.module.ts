import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';

const routes: Routes = [
  {
    path: '',
    component: FirstComponent,
  },

  {
    path: 'mainMod',
    loadChildren: () =>
      import('../app/main/main.module').then((module) => module.MainModule),
  },
  {
    path: 'validationMod',
    loadChildren: () =>
      import('../app/validation/validation.module').then((module) => module.ValidationModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
