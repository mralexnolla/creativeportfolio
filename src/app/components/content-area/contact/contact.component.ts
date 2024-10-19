import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  @Output() formSubmited = new EventEmitter<{
    name: string;
    subject: string;
    email: string;
    message: string;
  }>();

  name: string  = "";
  subject: string = "";
  email: string = "";
  message: string = "";

  onSubmit() {
    this.formSubmited.emit({
      name: this.name,
      subject: this.subject,
      email: this.email,
      message: this.message,
    });
  }
}
