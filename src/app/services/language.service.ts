import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { TranslateService } from '@ngx-translate/core';

const LNG_KEY = 'SELECTED LANGUAGE';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  selected = '';

  constructor(
    private translate: TranslateService,
    private storage: Storage
  ) { }

  setInitialAppLanguage() {
    let language = this.translate.getBrowserLang();
    this.translate.setDefaultLang(language);

    this.storage.get(LNG_KEY).then(language => {
      if (language) {
        this.setAppLanguage(language);
      }
    });
  }

  getLanguages() {
    return [
      { text: 'English', value: 'en', img: 'assets/img/flags/en.svg'},
      { text: 'Deutsch', value: 'de', img: 'assets/img/flags/de.svg'}
    ];
  }

  setAppLanguage(language) {
    this.translate.use(language);
    this.storage.set(LNG_KEY, language);
  }

}
