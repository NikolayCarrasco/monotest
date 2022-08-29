import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewsRoutingModule } from './views-routing.module';
import { PeopleComponent } from './people/people.component';
import { PersonComponent } from '../components/person/person.component';
import { MaterialModule } from '../../material/material.module';


@NgModule({
  declarations: [
    PeopleComponent,
    PersonComponent
  ],
  imports: [
    CommonModule,
    ViewsRoutingModule,
    MaterialModule
  ]
})
export class ViewsModule { }
