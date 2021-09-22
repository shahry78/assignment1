import { Component, OnInit } from '@angular/core';
import { InstantChatService } from '@app/chat-service.service';
import { User } from '@app/models';
import { AuthenticationService } from '@app/services';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.less']
})
export class ChatComponent implements OnInit {

  currentUser: User;
  title = 'instant-chatting';
  user: String;
  room: String;
  // tslint:disable-next-line:ban-types
  messageText: String;
  messageArray: Array<{user: String , message: String }> = [];

  constructor(private instantChatservice: InstantChatService, private authenticationService: AuthenticationService){
    this.instantChatservice.newUserJoined()
      .subscribe(data => this.messageArray.push(data));

    this.currentUser = this.authenticationService.currentUserValue;

    this.instantChatservice.userLeftRoom()
      .subscribe(data => this.messageArray.push(data));

    this.instantChatservice.newMessageReceived()
      .subscribe(data => this.messageArray.push(data));
  }

  ngOnInit(): void {
      this.instantChatservice.joinRoom({user: this.currentUser.username, room: this.room});
  }

  join(){
      this.instantChatservice.joinRoom({user: this.user, room: this.room});
  }

  leave(){
    this.instantChatservice.leaveRoom({user: this.user, room: this.room});
  }

  sendMessage()
  {
    this.instantChatservice.sendMessage({user: this.currentUser.username, room: this.room, message: this.messageText});
    this.messageText = "";
  }
}
