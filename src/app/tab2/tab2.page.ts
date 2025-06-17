import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { 
  IonHeader, 
  IonToolbar, 
  IonTitle, 
  IonContent, 
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonItem,
  IonLabel,
  IonButton,
  IonIcon,
  IonSpinner,
  IonChip,
  IonAvatar,
  IonBackButton,
  IonButtons
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { arrowBackOutline, planetOutline, locationOutline } from 'ionicons/icons';
import { RickMortyService, Character } from '../services/rick-morty.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  imports: [
    CommonModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonItem,
    IonLabel,
    IonButton,
    IonIcon,
    IonSpinner,
    IonChip,
    IonAvatar,
    IonBackButton,
    IonButtons
  ]
})
export class Tab2Page implements OnInit {
  character: Character | null = null;
  isLoading = true;
  characterId: number | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private rickMortyService: RickMortyService
  ) {
    addIcons({ arrowBackOutline, planetOutline, locationOutline });
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params['id']) {
        this.characterId = parseInt(params['id']);
        this.loadCharacterDetails();
      }
    });
  }

  loadCharacterDetails() {
    if (this.characterId) {
      this.isLoading = true;
      this.rickMortyService.getCharacter(this.characterId).subscribe({
        next: (character: Character) => {
          this.character = character;
          this.isLoading = false;
        },
        error: (error) => {
          console.error('Erro ao carregar detalhes do personagem:', error);
          this.isLoading = false;
        }
      });
    }
  }

  getStatusColor(status: string): string {
    switch (status.toLowerCase()) {
      case 'alive':
        return 'success';
      case 'dead':
        return 'danger';
      default:
        return 'medium';
    }
  }

  goBack() {
    this.router.navigate(['/tabs/tab1']);
  }
}

