import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Tab1Page } from '../tab1/tab1.page';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor(
    public modalCtrl: ModalController
  ) {}

  public openModal() {
    this.modalCtrl.create({component: Tab1Page})
      .then((modal) => {
        modal.present();
      });
  }
}
