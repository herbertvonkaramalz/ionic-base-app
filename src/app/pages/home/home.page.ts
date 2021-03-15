import { TranslateService } from '@ngx-translate/core';
import { NotificationService } from './../../services/notification.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  params = {
    name: 'Dominik'
  }

  constructor(
    private notificationService: NotificationService,
    private translateService: TranslateService
  ) { }

  ngOnInit() {
  }

  showToast() {
    this.notificationService.presentToast(this.translateService.instant('HOME.simpleAlert'), 2000);
  }

}
