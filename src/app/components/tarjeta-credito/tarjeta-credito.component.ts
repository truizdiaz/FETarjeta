import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tarjeta-credito',
  templateUrl: './tarjeta-credito.component.html',
  styleUrls: ['./tarjeta-credito.component.css']
})
export class TarjetaCreditoComponent implements OnInit {
  listTarjetas: any[] = [
    { titular: 'Juan Perez', numeroTarjeta: '25252526262', fechaExpiracion: '11/23', cvv: '123' },
    { titular: 'Miguel Gonzalez', numeroTarjeta: '252526262', fechaExpiracion: '11/24', cvv: '312' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
