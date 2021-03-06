import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { HomePage } from '../home/home';
import { ChatService } from '../../app/chat.service';
import { ChatModel } from '../../app/chat.model';

/**
 * Generated class for the OthersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-others',
  templateUrl: 'others.html',
})
export class OthersPage {

  nickName: string;
  systemList: ChatModel[] = [];
  chatList: ChatModel[] = [];

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public chatService: ChatService) {
  }

  ngOnInit () {
    this.nickName = this.chatService.getUsername();
    let dateNow: Date = new Date();
    this.systemList.push({
      'date': dateNow, 
      'user': 'System',
      'msg': 'Hello, ' + this.nickName + '!'
    })
    this.systemList.push({
      'date': dateNow, 
      'user': 'System',
      'msg': 'Welcome to Variety Category!'
    })
  }

  teste () {
    this.nickName = this.chatService.getUsername();
    console.log(this.nickName);
  }

  backHome() {
    this.navCtrl.setRoot(HomePage);
  }

  sendMsg(msg: string) {
    let dateNow: Date = new Date();
    this.chatList.push({
      'date': dateNow, 
      'user': this.nickName,
      'msg': msg
    })

  }

}
