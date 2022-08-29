import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'monorepo/people',
    pathMatch: 'full'
  },
  {
    path: 'monorepo',
    loadChildren: () => import('./pages/pages.module').then( m => m.PagesModule)
  },
  {
    path: '**',
    redirectTo: 'monorepo/poeple'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
