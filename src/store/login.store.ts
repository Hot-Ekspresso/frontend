import { makeAutoObservable, runInAction } from "mobx";

class LoginStore {
  isFetching: boolean = false;
  constructor() {
    makeAutoObservable(this);
    this.submit = this.submit.bind(this);
  }

  submit() {
    runInAction(() => {
      this.isFetching = true;
    })
  }
}

export default new LoginStore();