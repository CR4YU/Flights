import { Component, OnInit } from '@angular/core';
import {AirportsService} from "../../../shared/airports.service";

@Component({
  selector: 'app-airports',
  templateUrl: './airports.component.html',
  styleUrls: ['./airports.component.css']
})
export class AirportsComponent implements OnInit {

  airports = [];

  constructor(private airportsService: AirportsService) { }

  ngOnInit(): void {
    this.airports = this.airportsService.fetchAirports();
  }

}
