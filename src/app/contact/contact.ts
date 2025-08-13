import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {

  isNameLabelVisible = false;
  isAgeLabelVisible = false;
  isEmailLabelVisible = false;
  isPasswordLabelVisible = false;

  hideLabel(label: string): void {
    switch (label) {
      case 'name':
        this.isNameLabelVisible = false;
        break;
      case 'age':
        this.isAgeLabelVisible = false;
        break;
      case 'email':
        this.isEmailLabelVisible = false;
        break;
      case 'password':
        this.isPasswordLabelVisible = false;
        break;
    }
  }

  revealLabel(input = "", event: Event): void {
    const inputValue = (event.target as HTMLInputElement).value;
    if (inputValue.trim() === "") {
      this.hideLabel(input);
      return;
    }

    switch (input) {
      case 'name':
        this.isNameLabelVisible = true;
        break;
      case 'age':
        this.isAgeLabelVisible = true;
        break;
      case 'email':
        this.isEmailLabelVisible = true;
        break;
      case 'password':
        this.isPasswordLabelVisible = true;
    }
  }
}
