import { Component, OnInit } from "@angular/core";
import { AuthenticateService } from "src/app/services/authenticate.service";
import { NavController } from '@ionic/angular';

@Component({
  selector: "app-reset-pass",
  templateUrl: "./reset-pass.page.html",
  styleUrls: ["./reset-pass.page.scss"],
})
export class ResetPassPage implements OnInit {
  public email: string = "";
  constructor(private authServices: AuthenticateService,
    private navCtrl: NavController,) {}

  ngOnInit() {}

  sendLinkReset() {
    if (this.email != "") {
      this.authServices
        .resetPassword(this.email)
        .then(() => {
          console.log("enviado");
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      alert("Debe ingresar el correo electronico");
    }
  }
  goToLoginPage() {
    this.navCtrl.navigateForward('/login');
  }



}
