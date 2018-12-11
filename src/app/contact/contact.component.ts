
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' })};

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  private apiUrl: string = 'http://localhost:8000/index.php/';
  email: string;
  nombre: string;
  motivo: string;
  mensaje: string;
  apellido: string;
  cargando: boolean;
  /* * * * Progress bar * * * */
  color = 'warn';
  checked = false;
  disabled = false;

  constructor(private http: HttpClient,public snackBar: MatSnackBar) { }
  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {duration: 2000,verticalPosition:'bottom'});
  }
  ngOnInit() {
    this.nombre = "";
    this.motivo = "";
    this.email = "";
    this.mensaje = "";
    this.apellido = "";
    this.cargando = false;

  }
  clean($event){
    $event.preventDefault();
    this.nombre = "";
    this.motivo = "";
    this.email = "";
    this.mensaje = "";
    this.apellido = "";
    this.cargando = false;
  }
  processForm() {
    this.cargando = true;
    const allInfo = `Nombre: ${this.nombre}. Motivo ${this.motivo}. My message is ${this.mensaje}`;
    setTimeout(() =>{ this.cargando = false;this.openSnackBar('Se ha enviado un codigo a su mail','OK');  },1500);
    // //alert(allInfo);
    // this.http.get(this.apiUrl+'saluda/').subscribe(data => {
    //   console.log(data);
    // });
  }
}
