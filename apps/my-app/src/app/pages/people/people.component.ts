import { Component, OnInit } from '@angular/core';
import { Person } from '@my-org/models';
import { PersonService } from '@my-org/services';

@Component({
  selector: 'my-org-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css'],
})
export class PeopleComponent implements OnInit {

  public people: Person[];
  constructor(
    private personService: PersonService,
  ) { 
    this.people = []
  }

  ngOnInit() {
    this.fetchPeople();
  }

  async fetchPeople(){
    try {
      const response: any = await this.personService.getAllPeople().toPromise();
      console.log(response)
      this.people = response
    }
    catch (error) {
      console.log('Algo ha salido mal');
    }
  }

  doRefresh(event: any) {
    setTimeout(async () => {
      await this.fetchPeople();
      event.target.complete();
    }, 2000);
  }
}
