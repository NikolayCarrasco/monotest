import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
      path: '',
      redirectTo: 'monorepo-front/people',
      pathMatch: 'full'
    },
    {
      path: 'monorepo-front',
      loadChildren: () => import('./views/views.module')
        .then(m => m.ViewsModule)
    },
    {
      path: '**',
      redirectTo: 'monorepo-front/people'
    }
  ];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }