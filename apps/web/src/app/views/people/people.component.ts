import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Person } from '@my-org/models'
import { PersonService } from '@my-org/services';
@Component({
  selector: 'my-org-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.less'],
})
export class PeopleComponent implements OnInit {

  public people: Person[] = [];
  public id: string;
  constructor(
    private personService: PersonService,
    private activatedRoute: ActivatedRoute,
  ) {
    this.id = this.activatedRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.fetchPeople()
  }

  async fetchPeople(){
    try {
      const response: any = await this.personService.getAllPeople().toPromise();
      this.people = response
    }
    catch (error) {
      console.log('Algo ha salido mal');
    }
  }

  public refresh(){
    this.ngOnInit();
  }

  /* async fetchGetProduct() {
    try {
      const response: any = await this.personService.getPerson(this.id).toPromise();
      this.people = response.message;
      

    }
    catch (error) {
      console.log('Algo ha salido mal');
    }
  } */
}
