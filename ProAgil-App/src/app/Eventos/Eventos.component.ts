import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-Eventos',
  templateUrl: './Eventos.component.html',
  styleUrls: ['./Eventos.component.css']
})
export class EventosComponent implements OnInit {

  eventos: any;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getEventos();
  }

  getEventos() {
    this.eventos = this.http.get('http://localhost:5000/WeatherForecast').subscribe( response => {
      this.eventos = response;
      console.log(this.eventos);
    }, error => {
      console.log(error);
    });
  }

}
