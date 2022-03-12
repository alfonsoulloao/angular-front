import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})

// href="../assets/plugins/tablesaw-master/dist/tablesaw.css"
export class TablaComponent implements OnInit {
  @Input() titulos: string[];
  @Input() filas: any[];
  @Input() icono: string;
  @Input() iconoKey: string;
  @Input() enlace: string;
  @Input() enlaceKey: string;

  @Output() verDetalle = new EventEmitter<number>();
  objectKeys = Object.keys;

  constructor() { }

  ngOnInit(): void {
    console.log(this.icono)
    console.log(this.iconoKey)
    console.log(this.enlaceKey)
    console.log(this.enlace)
    console.log(this.filas)
  }

  detalle(id: number){
    this.verDetalle.emit(id);
  }
}
