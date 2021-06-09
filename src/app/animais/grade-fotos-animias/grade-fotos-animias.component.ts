import { Animais } from './../animais';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-grade-fotos-animias',
  templateUrl: './grade-fotos-animias.component.html',
  styleUrls: ['./grade-fotos-animias.component.css']
})
export class GradeFotosAnimiasComponent implements OnInit {

  @Input() animais!: Animais

  constructor() { }

  ngOnInit(): void {
  }

}
