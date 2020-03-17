import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// Components
import {TasksComponent} from './components/tasks/tasks.component';
import {PrivateTasksComponent} from './components/private-tasks/private-tasks.component';

import { PhotosListComponent } from './components/photos-list/photos-list.component'
import { PhotoFormComponent } from './components/photo-form/photo-form.component'
import { PhotoPreviewComponent } from './components/photo-preview/photo-preview.component'

import {SigninComponent} from './components/signin/signin.component';
import {SignupComponent} from './components/signup/signup.component';

import {AuthGuard} from './auth.guard';

const routes: Routes = [
{
  path: "",
  redirectTo: "/tasks",
  pathMatch: "full"
}
,
{
  path: "tasks",
  component: TasksComponent ,
  canActivate: [AuthGuard]
},
{
  path: "private",
  component: PrivateTasksComponent,
  canActivate: [AuthGuard]
},
{
  path: 'photos',
  component: PhotosListComponent
},
{
  path: 'photos/new',
  component: PhotoFormComponent
},
{
  path: 'photos/:id',
  component: PhotoPreviewComponent
},
{
  path: '',
  redirectTo: '/photos',
  pathMatch: 'full'
},
{
  path: "signin",
  component: SigninComponent
},
{
  path: "signup",
  component: SignupComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
