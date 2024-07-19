import { Routes } from '@angular/router';
import {ListComponent} from "./list/list.component";
import {DetailsComponent} from "./details/details.component";

export const routes: Routes = [
  {
    path: '',
    component: ListComponent,
    pathMatch: 'full'
  },
  {
    path: 'contacts',
    component: ListComponent,
  },
  {
    path: 'contacts/:id',
    component: DetailsComponent,
    // TODO: change to service call
    title: (route, _state) => `${route.paramMap.get('id')}'s info`
  }
];
