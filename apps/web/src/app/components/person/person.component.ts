import { Component, Input, OnInit } from '@angular/core';
import { Person } from '@my-org/models';
import { PersonService } from '@my-org/services';

@Component({
  selector: 'my-org-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.less'],
})
export class PersonComponent implements OnInit {

  @Input() person!: Person;

  constructor(
    private personService: PersonService
  ) {}

  ngOnInit(): void {}

  deletePerson(){
    try {
      if (this.person._id) this.personService.deletePerson(this.person._id).subscribe();
    } catch (error) {
      console.log('Algo ha salido mal');
    }
  }
}
