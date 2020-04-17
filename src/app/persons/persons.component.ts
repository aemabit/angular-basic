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
  private personListSubs: Subscription;

  constructor(private personService: PersonService) {}

  ngOnInit() {
    this.personList = this.personService.persons;
    this.personListSubs = this.personService.personsChanged.subscribe(
      (persons) => {
        this.personList = persons;
      }
    );
  }

  rmPerson(person: string) {
    this.personService.deletePerson(person);
  }

  ngOnDestroy() {
    this.personListSubs.unsubscribe();
  }
}
