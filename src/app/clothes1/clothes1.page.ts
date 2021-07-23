import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-clothes1',
  templateUrl: './clothes1.page.html',
  styleUrls: ['./clothes1.page.scss'],
})
export class Clothes1Page implements OnInit {

  constructor(
    private alertcontroller: AlertController
  ) { }

  async showAlert(){
    await this.alertcontroller.create({
      message: "Added Successfully",
      buttons: [
        { text:"OK"}
      ]
    }).then(res => res.present());

  }
  ngOnInit() {
  }

}
