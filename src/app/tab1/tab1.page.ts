import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { 
  IonHeader, 
  IonToolbar, 
  IonTitle, 
  IonContent, 
  IonList, 
  IonItem, 
  IonAvatar, 
  IonLabel,
  IonSearchbar,
  IonInfiniteScroll,
  IonInfiniteScrollContent,
  IonSpinner,
  IonRefresher,
  IonRefresherContent
} from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { RickMortyService, Character, ApiResponse } from '../services/rick-morty.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  imports: [
    CommonModule,
    FormsModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonList,
    IonItem,
    IonAvatar,
    IonLabel,
    IonSearchbar,
    IonInfiniteScroll,
    IonInfiniteScrollContent,
    IonSpinner,
    IonRefresher,
    IonRefresherContent
  ]
})
export class Tab1Page implements OnInit {
  characters: Character[] = [];
  currentPage = 1;
  totalPages = 1;
  isLoading = false;
  searchTerm = '';

  constructor(
    private rickMortyService: RickMortyService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loadCharacters();
  }

  loadCharacters(event?: any) {
    this.isLoading = true;
    
    if (this.searchTerm) {
      this.rickMortyService.searchCharacters(this.searchTerm).subscribe({
        next: (response: ApiResponse) => {
          this.characters = response.results;
          this.totalPages = response.info.pages;
          this.isLoading = false;
          if (event) event.target.complete();
        },
        error: (error) => {
          console.error('Erro ao buscar personagens:', error);
          this.isLoading = false;
          if (event) event.target.complete();
        }
      });
    } else {
      this.rickMortyService.getCharacters(this.currentPage).subscribe({
        next: (response: ApiResponse) => {
          if (this.currentPage === 1) {
            this.characters = response.results;
          } else {
            this.characters = [...this.characters, ...response.results];
          }
          this.totalPages = response.info.pages;
          this.isLoading = false;
          if (event) event.target.complete();
        },
        error: (error) => {
          console.error('Erro ao carregar personagens:', error);
          this.isLoading = false;
          if (event) event.target.complete();
        }
      });
    }
  }

  onSearchChange(event: any) {
    this.searchTerm = event.detail.value;
    this.currentPage = 1;
    this.loadCharacters();
  }

  loadMore(event: any) {
    if (this.currentPage < this.totalPages && !this.searchTerm) {
      this.currentPage++;
      this.loadCharacters(event);
    } else {
      event.target.complete();
    }
  }

  doRefresh(event: any) {
    this.currentPage = 1;
    this.loadCharacters(event);
  }

  viewCharacterDetails(character: Character) {
    this.router.navigate(['/tabs/tab2'], { 
      queryParams: { id: character.id } 
    });
  }
}

