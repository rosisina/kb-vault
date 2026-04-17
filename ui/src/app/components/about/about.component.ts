import { Component, Output, EventEmitter } from '@angular/core';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-about',
  standalone: true,
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  @Output() close = new EventEmitter<void>();

  constructor(public lang: LanguageService) {}
}
