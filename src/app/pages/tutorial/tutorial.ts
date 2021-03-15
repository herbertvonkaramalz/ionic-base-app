import { LanguageService } from './../../services/language.service';
import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { MenuController, IonSlides } from '@ionic/angular';

import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-tutorial',
  templateUrl: 'tutorial.html',
  styleUrls: ['./tutorial.scss'],
})
export class TutorialPage {
  showSkip = true;

  languages = [];

  @ViewChild('slides', { static: true }) slides: IonSlides;

  constructor(
    public menu: MenuController,
    public router: Router,
    public storage: Storage,
    private languageService: LanguageService
  ) {}

  
  startApp() {
    this.router
    .navigateByUrl('/app/tabs/home', { replaceUrl: true })
    .then(() => this.storage.set('ion_did_tutorial', true));
  }
  
  onSlideChangeStart(event) {
    event.target.isEnd().then(isEnd => {
      this.showSkip = !isEnd;
    });
  }
  
  ionViewWillEnter() {
    this.storage.get('ion_did_tutorial').then(res => {
      if (res === true) {
        this.router.navigateByUrl('/app/tabs/home', { replaceUrl: true });
      }
    });
    
    this.languages = this.languageService.getLanguages();
    this.menu.enable(false);
  }

  nextSlide() {
    //this.slides.lockSwipes(false);
    this.slides.slideNext();
    //this.slides.lockSwipes(true);
  }
  
  ionViewDidLeave() {
    // enable the root left menu when leaving the tutorial page
    this.menu.enable(true);
  }

  setLanguage(language) 
  {
    this.languageService.setAppLanguage(language);
    this.nextSlide();
  }
}
