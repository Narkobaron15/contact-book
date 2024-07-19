import {Routes} from '@angular/router';
import {ListComponent} from "../list/list.component";
import {DetailsComponent} from "../details/details.component";
import {NotFoundComponent} from "../not-found/not-found.component";
import {UpdateComponent} from "../update/update.component";
import {CreateComponent} from "../create/create.component";
import {AboutComponent} from "../about/about.component";

export const routes: Routes = [
  {
    path: '',
    component: ListComponent,
    pathMatch: 'full',
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
  },
  {
    path: 'create',
    component: CreateComponent,
    pathMatch: 'full',
    title: 'New contact',
  },
  {
    path: 'contacts/:id/edit',
    component: UpdateComponent,
    pathMatch: 'full',
  },
  {
    path: 'about',
    component: AboutComponent,
    pathMatch: 'full',
  },
  {
    path: '**',
    component: NotFoundComponent,
    title: '404 Not Found',
  },
];
