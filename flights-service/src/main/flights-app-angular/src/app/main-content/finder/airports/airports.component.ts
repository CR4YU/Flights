import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-airports',
  templateUrl: './airports.component.html',
  styleUrls: ['./airports.component.css']
})
export class AirportsComponent implements OnInit {

  airports = ["Wroclaw", "Warsaw"]

  constructor() { }

  ngOnInit(): void {
  }

}
