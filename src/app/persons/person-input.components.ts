import { Component, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-person-input",
  templateUrl: "./person-input.component.html",
  styleUrls: ["./person-input.component.scss"],
})
export class PersonInputComponent {
  @Output() personCreate = new EventEmitter<string>();
  enteredPersonName = "";


  onAddPerson() {
    this.personCreate.emit(this.enteredPersonName)
    this.enteredPersonName = "";
  }
}
