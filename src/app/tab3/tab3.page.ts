import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
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
  IonAvatar,
  IonIcon
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { personOutline, schoolOutline, mailOutline, logoGithub } from 'ionicons/icons';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
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
    IonAvatar,
    IonIcon
  ]
})
export class Tab3Page {
  studentInfo = {
    name: 'Alexsandro Acioli Pimentel Filho',
    course: 'Desenvolvimento de Aplicativos Móveis',
    institution: 'UNINASSAU',
    email: 'aciolialexsandro12@gmail.com',
    github: 'https://github.com/ac1oli',
    projectDescription: 'Este aplicativo foi desenvolvido como projeto de avaliação para a disciplina de Ionic e Angular. Utiliza a Rick and Morty API para exibir informações sobre personagens da série.',
    technologies: [
      'Ionic Framework',
      'Angular',
      'TypeScript',
      'Rick and Morty API',
      'HTML5',
      'CSS3'
    ]
  };

  constructor() {
    addIcons({ personOutline, schoolOutline, mailOutline, logoGithub });
  }

  openGithub() {
    window.open(this.studentInfo.github, '_blank');
  }

  sendEmail() {
    window.open(`mailto:${this.studentInfo.email}`, '_blank');
  }
}

