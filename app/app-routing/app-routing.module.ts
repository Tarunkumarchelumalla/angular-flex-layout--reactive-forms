import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { DetailviewComponent } from '../detailview/detailview.component';
import { ListviewComponent } from '../listview/listview.component';
import { ToolbarComponent } from '../toolbar/toolbar.component';

const routes: Routes = [
  { path: '', redirectTo: '/toolbar', pathMatch: 'full' },
  { path: 'toolbar', component: ToolbarComponent },
  // {
  //   path: 'depart/:id',
  //   component: Mycomp2Component,
  //   children: [
  //     { path: 'child1', component: Child1Component },
  //     { path: 'child2', component: Child2Component },
  //   ],
  // },
  { path: 'Listview', component: ListviewComponent },
  { path: 'deatilview', component: DetailviewComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [],
})
export class AppRoutinModule {}
export const routingcomps = [
  ListviewComponent,
  DetailviewComponent,
  ToolbarComponent,
];
