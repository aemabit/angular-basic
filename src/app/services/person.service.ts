import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class PersonService {
  personsChanged = new Subject<string[]>();
  persons: string[] = ["Max", "Manuel", "Ana"];

  addPerson(name: string) {
    this.persons.push(name);
    this.personsChanged.next(this.persons)
  }

  deletePerson(name: string) {
    this.persons = this.persons.filter((person) => {
      return person != name;
    });
    this.personsChanged.next(this.persons)
  }
}
