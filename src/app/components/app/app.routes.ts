import {Routes} from '@angular/router';
import {ListComponent} from "../list/list.component";
import {DetailsComponent} from "../details/details.component";
import {NotFoundComponent} from "../not-found/not-found.component";
import {UpdateComponent} from "../update/update.component";
import {CreateComponent} from "../create/create.component";
import {AboutComponent} from "../about/about.component";
import {ContactComponent} from "../contact/contact.component";
import ContactService from "../../services/contact/contact.service";
import {inject} from "@angular/core";

export const routes: Routes = [
  {
    path: '',
    component: ListComponent,
    pathMatch: 'full',
    title: 'Contact book',
  },
  {
    path: 'contacts',
    pathMatch: 'full',
    component: ListComponent,
    title: 'Contact book',
  },
  {
    path: 'contacts/:id',
    component: DetailsComponent,
    pathMatch: 'full',
    title: (route, _state) => {
      const service = inject(ContactService)
      const contact = service.getContact(Number(route.paramMap.get('id')))
      return `${contact?.name ?? 'Contact'} Details`
    },
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
    title: (route, _state) => {
      const service = inject(ContactService)
      const contact = service.getContact(Number(route.paramMap.get('id')))
      return `Update ${contact?.name ?? 'Contact'}`
    },
  },
  {
    path: 'about',
    component: AboutComponent,
    pathMatch: 'full',
    title: 'About us',
  },
  {
    path: 'contact',
    component: ContactComponent,
    pathMatch: 'full',
    title: 'Contact us',
  },
  {
    path: '**',
    component: NotFoundComponent,
    title: '404 Not Found',
  },
];
