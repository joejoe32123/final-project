import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    private alertcontroller: AlertController
  ) { }

  async showAlert(){
    await this.alertcontroller.create({
      message: "Login Successfull",
      buttons: [
        { text:"OK"}
      ]
    }).then(res => res.present());

  }

  public form = {
    Email_Adress: "",
    Password:""
  }

  ngOnInit() {
  }

  print() {

    console.log(this.form)

  }
}

