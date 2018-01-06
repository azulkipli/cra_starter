import { observable, action } from "mobx";
import remotedev from "mobx-remotedev";

@remotedev
class Gui {
  @observable loaderActive;
  @observable sidebarMenuVisible;
  @observable alertTitle;
  @observable alertMessage;
  @observable alertCalled;
  @observable alertOpen;
  @observable alertType;

  constructor() {
    Object.assign(this, {
      loaderActive: false,
      alertTitle: "",
      alertMessage: "",
      alertCalled: false,
      alertOpen: false,
      alertType: ""
    });
  }

  @action
  attr(obj) {
    Object.assign(this, obj);
  }

  @action
  closeLoader() {
    this.loaderActive = false;
  }

  @action
  openLoader() {
    this.loaderActive = true;
  }

  @action
  toggleSidebarMenu() {
    this.sidebarMenuVisible = !this.sidebarMenuVisible;
  }

  @action
  openAlert(title = "", message = "", autohide = true, timeout = 5000, type = "info", scrollTo = "", min = 95) {
    Object.assign(this, {
      alertTitle: title,
      alertMessage: message,
      alertCalled: false,
      alertOpen: true,
      alertType: type
    });

    // scroll to the top
    window.scroll(0, 0);

    if (this.alertOpen && autohide === true) {
      setTimeout(() => {
        this.closeAlert();
      }, timeout);
    }
  }

  @action
  closeAlert() {
    setTimeout(() => {
      Object.assign(this, {
        alertTitle: "",
        alertMessage: "",
        alertCalled: true,
        alertOpen: false
      });
    }, 200);
  }
}

let gui = new Gui();
export default gui;
