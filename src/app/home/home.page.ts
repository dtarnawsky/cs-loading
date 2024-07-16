import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from '@ionic/angular/standalone';
import { LoadingController } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonButton, IonHeader, IonToolbar, IonTitle, IonContent],
})
export class HomePage {
  @ViewChild('content', { read: ElementRef }) content!: ElementRef;
  loadingCtrl: LoadingController = inject(LoadingController);
  constructor() { }

  ionViewDidEnter(): void {
    this.content.nativeElement.setAttribute('role', 'none');
    console.log('role set')
  }
  async presentLoading() {
    const loader = await this.loadingCtrl.create({
      message: `
         <div role="text" aria-label="Please Wait">
         <ion-label aria-hidden="true">Please Wait...</ion-label>
         </div>`,
      htmlAttributes: { 'aria-hidden': 'true', 'aria-label': 'Please Wait' }
    });
    loader.present();
  }
}
