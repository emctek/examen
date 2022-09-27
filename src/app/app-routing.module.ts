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
    path: 'aspirantes',
    loadChildren: () => import('./aspirantes/aspirantes/aspirantes.module').then( m => m.AspirantesPageModule)
  },
  {
    path: 'alumnos',
    loadChildren: () => import('./alumnos/alumnos/alumnos.module').then( m => m.AlumnosPageModule)
  },
  {
    path: 'docentes',
    loadChildren: () => import('./docentes/docentes.module').then( m => m.DocentesPageModule)
  },
  {
    path: 'exalumnos',
    loadChildren: () => import('./exalumnos/exalumnos/exalumnos.module').then( m => m.ExalumnosPageModule)
  },
  {
    path: 'padresfamilia',
    loadChildren: () => import('./padresfamilia/padresfamilia/padresfamilia.module').then( m => m.PadresfamiliaPageModule)
  },
  {
    path: 'empresas',
    loadChildren: () => import('./empresas/empresas/empresas.module').then( m => m.EmpresasPageModule)
  },
  {
    path: 'candendario',
    loadChildren: () => import('./calendario/candendario/candendario.module').then( m => m.CandendarioPageModule)
  },
  {
    path: 'candendario',
    loadChildren: () => import('./calendario/candendario/candendario.module').then( m => m.CandendarioPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
