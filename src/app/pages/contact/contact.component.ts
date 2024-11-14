import {Component, ElementRef, ViewChild} from '@angular/core';
import emailjs from 'emailjs-com';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  // @ViewChild('contactForm', { static: false }) contactForm!: ElementRef;

  companyContact = {
    email: "realestatelk@gmail.com",
    address: "Galle Road, Panadura",
    phone: "+94 70 695 0532"

  };

  contact = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  // onSubmit() {
  //   console.log('Form submitted:', this.contact);
  //   this.sendEmail(this.contact);
  //   // You can add code here to send form data to a backend service
  // }

  successMessage = '';
  errorMessage = '';

  // sendEmail() {
  //   emailjs
  //     .sendForm('service_r3s4tjc', 'template_wi02wg8', this.contactForm.nativeElement, 'quQi8TtuOne23hgNm')
  //     .then(
  //       (result) => {
  //         this.successMessage = 'Your message has been sent!';
  //         this.contactForm.nativeElement.reset();
  //       },
  //       (error) => {
  //         this.errorMessage = 'Failed to send message. Please try again later.';
  //       }
  //     );
  // }

  sendEmail() {
    const templateParams = {
      user_name: this.contact.name,
      user_email: this.contact.email,
      subject: this.contact.subject,
      message: this.contact.message
    };

    emailjs.send('service_r3s4tjc', 'template_5nkuqf5', templateParams, 'quQi8TtuOne23hgNm')
      .then(
        (result) => {
          this.successMessage = 'Your message has been sent!';
          this.resetForm();
        },
        (error) => {
          this.errorMessage = 'Failed to send message. Please try again later.';
        }
      );
  }

  resetForm() {
    this.contact = { name: '', email: '', subject: '', message: '' };
  }

}
