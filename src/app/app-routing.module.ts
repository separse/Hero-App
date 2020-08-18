import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AssignmentComponent } from './Hero/assignment/assignment.component';
import { AuthHeroGuard } from './Hero/auth-hero.guard';
import { AddComponent } from './Hero/add/add.component';
import { DetailComponent } from './Hero/detail/detail.component';
import { EditHeroComponent } from './Hero/edit-hero/edit-hero.component';

const routes: Routes = [
  {path: '', component: AssignmentComponent},
  {path: 'home', component: AssignmentComponent},
  {path: 'add', component: AddComponent},
  {path: 'heroes/:name', component: DetailComponent},
  {path: 'heroes/:name/edit', component: EditHeroComponent, canActivate: [AuthHeroGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
