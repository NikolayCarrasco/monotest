import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PeopleRoutingModule } from './pages-routing.module';
import { IonicModule } from '@ionic/angular';
import { PeopleComponent } from './people/people.component';
import { PersonComponent } from '../components/person/person.component';


@NgModule({
  declarations: [PeopleComponent, PersonComponent],
  imports: [
    CommonModule,
    PeopleRoutingModule,
    IonicModule
  ]
})
export class PagesModule { }
