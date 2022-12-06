import { Component, ViewChild } from '@angular/core';
import { UserViewComponent } from './user-view/user-view.component';
import { User } from 'src/interface/User';
import { handler } from "src/utils/StorageManager";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'databind-angular';

  users: User[] = handler.getUsers();

  currentAction: string = "add";
  currentUserIndex: number = this.users.length-1;

  constructor() { }

  @ViewChild(UserViewComponent)
  private userViewComponent!: UserViewComponent;

  clear() {
    this.currentAction = "add";
    this.userViewComponent.initUser();
    this.updateLocalStorage();
  }

  create() {
    const {username, surname, name, group} = this.userViewComponent.getUserInformation();
    if([username, surname, name, group].some((el => !el))) {
      return;
    }
    this.users.push({username, surname, name, group});
    this.currentAction = "udpate";
    this.currentUserIndex = this.users.length-1;
    this.updateLocalStorage();
    this.clear();
  }

  update() {
    this.users[this.currentUserIndex] = this.userViewComponent.getUserInformation();
    this.currentAction = "add";
    this.clear();
    this.updateLocalStorage();
  }

  delete(index: number) {
    if(index == this.currentUserIndex) {
      this.currentAction = "add";
    }
    this.users = [...this.users.slice(0, index), ...this.users.slice(index+1)];
    //this.users = this.users.splice(index, 1);
    this.updateLocalStorage();
  }

  isAddCurrentAction() {
    return this.currentAction === "add";
  }

  updateUser(index: number) {
    this.userViewComponent.setCurrentUser(this.users[index]);
    this.currentAction = "update";
    this.updateLocalStorage();
  }

  updateLocalStorage() {
    handler.setUsers([...this.users]);
  }

}
