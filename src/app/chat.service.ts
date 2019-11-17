import { Injectable } from "@angular/core";

@Injectable()
export class ChatService {

    userName: string = 'provisorio';

    getUsername(){
        return this.userName;
    }

    setUserName(newUsername: string) {
        this.userName = newUsername;
    }
}