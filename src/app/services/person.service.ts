import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class PersonService {
  personsChanged = new Subject<string[]>();
  // persons: string[] = ["Max", "Manuel", "Ana"];
  stwCharacters: string[] = [];

  URI = "https://starwarsjokes.aemabit.com/api/jokes";

  constructor(private http: HttpClient) {}

  fetchPersons() {
    this.http
      .get<any>(this.URI)
      .pipe(
        map((resData) => {
          return resData.map((character) => character.name);
        })
      )
      .subscribe((transformedData) => {
        this.personsChanged.next(transformedData)
      });
  }

  // addPerson(name: string) {
  //   this.persons.push(name);
  //   this.personsChanged.next(this.persons);
  // }

  // deletePerson(name: string) {
  //   this.persons = this.persons.filter((person) => {
  //     return person != name;
  //   });
  //   this.personsChanged.next(this.persons);
  // }
}
