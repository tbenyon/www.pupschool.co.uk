import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-offerings',
  templateUrl: './offerings.component.html',
  styleUrls: ['./offerings.component.scss']
})
export class OfferingsComponent implements OnInit {

  offeringsData = {
    oneToOne: {
      title: 'One on One Sessions',
      bullets: [
          '1:1 training',
          'Throughout Sussex',
          'Reach the goals that you want to achieve for you and your dog'
      ],
      priceText: '1 hours session',
      price: '£20'
    },
    groupClasses: {
      title: 'Group Classes',
      bullets: [
          '6 week courses',
          'Real world skills',
          'Family Friendly',
          'Afternoons and evenings'
      ],
      priceText: '6 X 1 hour class',
      price: '£60'
    }
  };

  constructor() { }

  ngOnInit() {
  }

}
