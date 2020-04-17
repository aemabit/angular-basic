import { Component, OnInit } from "@angular/core";
import { PersonService } from "../services/person.service";

@Component({
  selector: "app-persons",
  templateUrl: "./persons.component.html",
  styleUrls: ["./persons.component.scss"],
})
export class PersonsComponent implements OnInit {
  personList: string[];


  constructor(private personService: PersonService) {  }

  ngOnInit() {
    this.personList = this.personService.persons;
  }
}
