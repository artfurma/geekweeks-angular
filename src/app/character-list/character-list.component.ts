import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Character } from '../models/character';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss']
})
export class CharacterListComponent implements OnInit {

  characters: Character[];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('https://anapioficeandfire.com/api/characters?page=5&pageSize=50')
      .subscribe((data: Character[]) => this.characters = data);
  }

}
