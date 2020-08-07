import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'path-request', pathMatch: 'full' },
  { path: 'login', loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule) },
  { path: 'path-request', loadChildren: () => import('./path-request/path-request.module').then( m => m.PathRequestPageModule) },
  { path: 'view-procedure', loadChildren: () => import('./view-procedure/view-procedure.module').then( m => m.ViewProcedurePageModule) },
  { path: 'view-procedure/:id', loadChildren: () => import('./view-procedure/view-procedure.module').then( m => m.ViewProcedurePageModule) },
  { path: 'view-necropsy-details', loadChildren: () => import('./view-necropsy-details/view-necropsy-details.module').then( m => m.ViewNecropsyDetailsPageModule) },
  { path: 'view-necropsy-details/:id', loadChildren: () => import('./view-necropsy-details/view-necropsy-details.module').then( m => m.ViewNecropsyDetailsPageModule) },
  { path: 'animal-worklist', loadChildren: () => import('./animal-worklist/animal-worklist.module').then( m => m.AnimalWorklistPageModule) },
  { path: 'necropsy-task-fulfillment', loadChildren: () => import('./necropsy-task-fulfillment/necropsy-task-fulfillment.module').then( m => m.NecropsyTaskFulfillmentPageModule) },
  {
    path: 'task-fulfillment',
    loadChildren: () => import('./modals/task-fulfillment/task-fulfillment.module').then( m => m.TaskFulfillmentPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
