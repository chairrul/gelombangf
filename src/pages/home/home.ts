import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ContohPage } from '../contoh/contoh';

@Component({
selector: 'page-home',
templateUrl: 'home.html'
})
export class HomePage {

splash = true;
secondPage = HomePage;

constructor(public navCtrl: NavController) {

}

main(id){
this.navCtrl.push(id);
}
loadContoh() {
this.navCtrl.push(ContohPage,{
})
}


ionViewDidLoad() {
setTimeout(() => {
this.splash = false;
}, 4000);
}

}