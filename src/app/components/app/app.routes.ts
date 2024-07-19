import { Routes } from '@angular/router';
import {ListComponent} from "../list/list.component";
import {DetailsComponent} from "../details/details.component";
import {NotFoundComponent} from "../not-found/not-found.component";

export const routes: Routes = [
  {
    path: '',
    component: ListComponent,
    pathMatch: 'full'
  },
  {
    path: 'contacts',
    pathMatch: 'full',
    component: ListComponent,
  },
  {
    path: 'contacts/:id',
    component: DetailsComponent,
    pathMatch: 'full',
    // TODO: change to service call
    title: (route, _state) => `${route.paramMap.get('id')}'s info`
  },
  {
    path: '**',
    component: NotFoundComponent,
  }
];
