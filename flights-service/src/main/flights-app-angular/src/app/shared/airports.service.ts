import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Airport} from "./airport.model";

@Injectable({ providedIn: 'root' })
export class AirportsService {

  airports: Airport[] = [
    {name: 'Wroclaw'},
    {name: 'Warsaw Modlin'}
  ];

  constructor(private http: HttpClient) {
  }


  fetchAirports() {
    return this.airports;
  }
}
