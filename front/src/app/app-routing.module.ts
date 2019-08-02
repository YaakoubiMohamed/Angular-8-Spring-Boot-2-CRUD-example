import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClassDetailComponent } from './class-detail/class-detail.component';
import { CreateClassComponent } from './create-class/create-class.component';
import { ClassListComponent } from './class-list/class-list.component';
import { EditClassComponent } from './edit-class/edit-class.component';

const routes: Routes = [
  { path: '', redirectTo: 'class', pathMatch: 'full' },
  { path: 'classes', component: ClassListComponent },
  { path: 'add', component: CreateClassComponent },
  { path: 'details/:id', component: ClassDetailComponent },
  { path: 'edit/:id', component: EditClassComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
