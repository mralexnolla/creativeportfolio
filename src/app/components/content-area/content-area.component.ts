import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-content-area',
  templateUrl: './content-area.component.html',
  styleUrls: ['./content-area.component.css'],
})
export class ContentAreaComponent {
  handleFormSubmission(formData:{name: string; email: string; subject: string; message: string}){
    console.log('form submitted:', formData);
  }
}
