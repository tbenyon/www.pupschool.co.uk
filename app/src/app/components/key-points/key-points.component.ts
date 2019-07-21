import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-key-points',
  templateUrl: './key-points.component.html',
  styleUrls: ['./key-points.component.scss']
})
export class KeyPointsComponent implements OnInit {
  bullets = [
      'sessions focussed on your individual goals',
      'trained with the Institute of Modern Dog Training (IMDT)',
      'force free training'
  ];

  constructor() { }

  ngOnInit() {
  }

}
