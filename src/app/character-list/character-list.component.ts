import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Character } from '../models/character';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss']
})
export class CharacterListComponent implements OnInit {

  characters: Character[];
  @Output() characterSelected = new EventEmitter<Character>();

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<Character[]>('https://anapioficeandfire.com/api/characters?page=5&pageSize=50').pipe(
      map(response => response.map(character => {
        character.id = character.url.match(/\d+/)[0];
        return character;
      }))
    ).subscribe(data => this.characters = data);
  }

  selectCharacter(character: Character) {
    console.log(character);
    this.characterSelected.emit(character);
  }

}
