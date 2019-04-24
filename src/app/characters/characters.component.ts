import { Component, OnInit } from '@angular/core';
import { Character } from '../models/character';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {

  selectedCharacter: Character;

  constructor() { }

  ngOnInit() {
  }

  onCharacterSelected(event: any) {
    this.selectedCharacter = event;
  }

}
