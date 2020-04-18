import { Component, OnInit, OnDestroy } from "@angular/core";
import { PersonService } from "../services/person.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-persons",
  templateUrl: "./persons.component.html",
  styleUrls: ["./persons.component.scss"],
})
export class PersonsComponent implements OnInit, OnDestroy {
  personList: string[];
  stw: string[];
  isFetching = false;
  private personListSubs: Subscription;

  constructor(private personService: PersonService) {}

  ngOnInit() {
    // this.personList = this.personService.persons;
    this.personService.fetchPersons();
    this.personListSubs = this.personService.personsChanged.subscribe(
      (persons) => {
        this.personList = persons;
        this.isFetching = false;
      }
    );
    this.isFetching = true;
  }

  rmPerson(person: string) {
    // this.personService.deletePerson(person);
  }

  ngOnDestroy() {
    this.personListSubs.unsubscribe();
  }
}
