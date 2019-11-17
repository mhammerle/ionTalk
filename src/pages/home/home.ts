
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MoviesPage } from '../movies/movies';
import { SportsPage } from '../sports/sports';
import { OthersPage } from '../others/others';
import { ChatService } from '../../app/chat.service';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  nickName: string = '';
  guestName: string;

  constructor(public navCtrl: NavController,
              public chatService: ChatService) {

  }

  ngOnInit () {
    let oldnick = this.getNickName();
    if (oldnick === 'provisorio'){
      let number = Math.floor(Math.random() * (9999 - 1000) + 1000);
      this.guestName = 'Guest' + number;
    } else {
      this.nickName = oldnick;
    }
  }

  setNickName () {
    if (this.nickName === ''){
      this.chatService.setUserName(this.guestName);
    } else {
      this.chatService.setUserName(this.nickName);
    }
  }

  getNickName() {
    let nickName = this.chatService.getUsername();
    return nickName;
  }

  onRoomSelected(room: string) {
    
    this.setNickName();

    switch (room) {
      case 'movies':
        this.navCtrl.setRoot('MoviesPage');
        break;
      case 'sports':
        this.navCtrl.setRoot('SportsPage');
        break;
      case 'others':
        this.navCtrl.setRoot('OthersPage');
        break;
      default:
        console.log('Something went wrong!')
        break;
    }
  }

}
