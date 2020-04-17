import { Component } from "@angular/core";
import { PersonService } from "../services/person.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-person-input",
  templateUrl: "./person-input.component.html",
  styleUrls: ["./person-input.component.scss"],
})
export class PersonInputComponent {
  enteredPersonName = "";

  constructor(private personService: PersonService, private router: Router) {}

  onAddPerson() {
    this.personService.addPerson(this.enteredPersonName);
    this.enteredPersonName = "";
    this.router.navigate(["/"]);
  }

}
