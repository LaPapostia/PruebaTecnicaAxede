import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'PruebaTecnicaHotel';
  forma: FormGroup;

  ngOnInit() {
    let DateObj = new Date();
    let fechaDesde = DateObj.getFullYear() + '-' + ('0' + (DateObj.getMonth() + 1)).slice(-2) + '-' + '01';
    let fechaHasta = DateObj.getFullYear() + '-' + ('0' + (DateObj.getMonth() + 1)).slice(-2) + '-' + ('0' + DateObj.getDate()).slice(-2);
    this.forma = new FormGroup({
      'dtmFechaDesde': new FormControl(fechaDesde, Validators.required),
      'dtmFechaHasta': new FormControl(fechaHasta, Validators.required),
    });
  }
}
