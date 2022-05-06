import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'economia',
    loadChildren: () => import('./pages/economia/economia.module').then( m => m.EconomiaPageModule)
  },
  {
    path: 'politica',
    loadChildren: () => import('./pages/politica/politica.module').then( m => m.PoliticaPageModule)
  },
  {
    path: 'deportes',
    loadChildren: () => import('./pages/deportes/deportes.module').then( m => m.DeportesPageModule)
  },
  {
    path: 'policial',
    loadChildren: () => import('./pages/policial/policial.module').then( m => m.PolicialPageModule)
  },
  {
    path: 'social',
    loadChildren: () => import('./pages/social/social.module').then( m => m.SocialPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
