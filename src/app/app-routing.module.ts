import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TasksComponent } from './components/tasks/tasks.component';
import { ShowInfoComponent } from './components/info/show-info/show-info.component';

const APP_ROUTES: Routes = [
  { path: 'tareas', component: TasksComponent, data: { title: 'Administración de tareas' } },
  { path: 'info', component: ShowInfoComponent, data: { title: 'Información' } },
  { path: '**', pathMatch: 'full', redirectTo: 'tareas' }
];

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES, { useHash:true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
