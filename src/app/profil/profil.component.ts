import { Component, OnInit } from '@angular/core';
import {images} from './profile'
@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  myImges=images
}
