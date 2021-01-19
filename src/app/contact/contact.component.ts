import { Component, OnInit } from '@angular/core';
import { EmailserviceService } from '../emailservice.service';



@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private emailserviceService : EmailserviceService) { }

  private emailSuccessfullySent;

  ngOnInit() {
  }

  sendButtonClicked(data) {
    this.emailserviceService.sendEmail(data).subscribe(
      val => {
        this.emailSuccessfullySent = true;
      },
      response => {
        this.emailSuccessfullySent = false;
      },
      () => {
      }
 )
    }

    closeAlert() {
      this.emailSuccessfullySent = undefined;
     }

}
