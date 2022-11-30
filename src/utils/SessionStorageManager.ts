import {User} from "src/interface/User";

const store = window.localStorage;

const KEY: string = "ANGULAR-STORAGE";

const USERS_KEY: string = `${KEY}-USERS`;

class LocalStorageUserHandler {
  
  setUsers(value: User[]) {
    store.setItem(USERS_KEY, JSON.stringify(value));
  }

  getUsers() {
    const strUsers = store.getItem(USERS_KEY) || "[]";
    return JSON.parse(strUsers);
  }
}

export const handler = new LocalStorageUserHandler();