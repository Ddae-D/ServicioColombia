import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-consume-service-colombia',
  templateUrl: './consume-service-colombia.component.html',
  styleUrls: ['./consume-service-colombia.component.css']
})
export class ConsumeServiceColombiaComponent 
{
  //urlService:String="https://www.datos.gov.co/resource/xdk5-pm3f.json";
  conversionData:any;
  // arregloPrueba:String|any[]=[{"id":"ejemplo"},{"id":"ejemplo 2"}];

  respuestaService:[]=[]; //array que guarda el response del servicio web

  constructor(private http:HttpClient){
    console.log("Se disparo servicio");
  }

  ngOnInit() {
    this.http.get("https://www.datos.gov.co/resource/xdk5-pm3f.json")
    .subscribe(response =>{
        this.conversionData = response;
        this.respuestaService = this.conversionData;
        console.log("Respuesta del servicio web\n", this.respuestaService);
    });
  }
}
