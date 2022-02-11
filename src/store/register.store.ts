import { makeAutoObservable, runInAction } from "mobx";

class RegisterStore {
  isFetching: boolean = false;
  constructor() {
    makeAutoObservable(this);
  }

  submit() {
    runInAction(() => {
      this.isFetching = true;
    })
  }
}

export default new RegisterStore();